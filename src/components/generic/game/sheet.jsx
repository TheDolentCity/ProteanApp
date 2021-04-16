import React, { useEffect, useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import ProteanErrorBoundary from '../../protean-framework/protean-error-boundary';
import { WidgetContainer } from './widget';
import NumberBlock from './blocks/number-block';
import DiceBlock from './blocks/dice-block';
import NoteBlock from './blocks/note-block';
import TextBlock from './blocks/text-block';

export default function Sheet() {
  const { globalState, dispatch } = useGlobalStore();
  const [sheet, setSheet] = useState(globalState.activeFile);

  // Update sheet when active file changes
  useEffect(() => {
    if (globalState.activeFile !== null && globalState.activeFile !== undefined) {
      setSheet(globalState.activeFile);
    }
  }, [globalState.activeFile]);

  // Sends the local sheet data to global storage
  const updateSheet = (value, index) => {
    if (sheet?.content[index] === undefined) {
      console.log(`sheet.content[${index}] is undefined on sheet object.`);
    }
    else {
      let newSheet = { ...sheet };
      newSheet.content[index] = value;
      setSheet(newSheet);
      dispatch({
        type: "updateActiveFile",
        payload: {
          activeFile: newSheet
        }
      });
    }
  }

  if (typeof(sheet?.content) === typeof([])) {
    return (
      <ProteanErrorBoundary
        fallbackUI={
          <div className="p-12">
            <h2>Error in Protean Sheet</h2>
            <p>Cannot render Sheet due to an error. Fix JSON, check console, or ask Dante for help.</p>
          </div>
        }>
        <WidgetContainer>
          {
            sheet?.content?.map((widget, index) => (
              <SheetWidget
                key={widget.uuid}
                widget={widget}
                onChange={(newWidget) => updateSheet(newWidget, index)}>
              </SheetWidget>
            ))
          }
        </WidgetContainer>
      </ProteanErrorBoundary>
    );
  }
  else return <span className="hidden"></span>;
}

function SheetWidget(props) {
  switch (props?.widget?.type) {
    case "DiceBlock":
      return (
        <DiceBlock
          static={false}
          diceBlock={props.widget}
          onChange={props.onChange}>
        </DiceBlock>
      );
    case "NoteBlock":
      return (
        <NoteBlock
          static={false}
          noteBlock={props.widget}
          onChange={props.onChange}>
        </NoteBlock>
      );
    case "NumberBlock":
      return (
        <NumberBlock
          static={false}
          numberBlock={props.widget}
          onChange={props.onChange}>
        </NumberBlock>
      );
    case "TextBlock":
      return (
        <TextBlock
          static={false}
          textBlock={props.widget}
          onChange={props.onChange}>
        </TextBlock>
      );
    default:
      console.log(`Widget type '${props?.widget?.type}' is not handled by SheetWidget component.`);
  }
}