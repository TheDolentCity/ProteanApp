import React, { useEffect, useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import { Widget, WidgetContainer } from './widget';
import NumberBlock from './blocks/number-block';
import DiceBlock from './blocks/dice-block';
import NoteBlock from './blocks/note-block';
import StatBlock from './stat-block';
import TextBlock from './blocks/text-block';
import DiceHeader from './blocks/dice-header';

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
  const updateSheet = (value) => {
		// console.log(`Sheet:${sheet}\nContent:${sheet?.content}\nIndex:${index}`);
    if (sheet === undefined) {
      console.log(`sheet is undefined on Sheet object.`);
    }
    else {
      let newSheet = { ...value };
      setSheet(newSheet);
			console.log("Dispatch Sheet:\n" + JSON.stringify(newSheet, null, 2));
      dispatch({
        type: "updateActiveFile",
        payload: {
          activeFile: newSheet
        }
      });
    }
  }

  return (
    <SheetWidgetContainer 
      widgetContainer={sheet} 
      onChange={updateSheet}>
    </SheetWidgetContainer>
  );
}

function SheetWidgetContainer({ widgetContainer, onChange }) {
  const [widgets, setWidgets] = useState(widgetContainer);

  // Update sheet when widget container changes
  useEffect(() => {
    if (widgetContainer !== null && widgetContainer !== undefined) {
      setWidgets(widgetContainer);
    }
  }, [widgetContainer]);

  const updateWidgets = (value, index) => {
    if (widgets?.content[index] === undefined) {
      console.log(`widgets.content[${index}] is undefined on SheetWidgetContainer object.`);
    }
    else {
      let newWidgets = { ...widgets };
      newWidgets.content[index] = value;
      setWidgets(newWidgets);
      onChange(newWidgets);
    }
  }

  if (typeof(widgets?.content) === typeof([])) {
    return (
      <WidgetContainer>
			{
				widgets?.content?.map((widget, index) => (
					<SheetWidget
						key={widget.uuid}
						widget={widget}
						onChange={(newWidget) => updateWidgets(newWidget, index)}>
					</SheetWidget>
				))
			}
      </WidgetContainer>
    );
  }
  else return <div></div>;
}

function SheetWidget({ widget, onChange }) {
  switch (widget?.type) {
    case "SheetWidgetContainer":
      return (
				<Widget css="col-span-12 xl:col-span-6">
					<SheetWidgetContainer
						widgetContainer={widget}
						onChange={onChange}>
					</SheetWidgetContainer>
				</Widget>
      );
    case "DiceHeader":
      return (
        <DiceHeader
          static={false}
          diceHeader={widget}
          onChange={onChange}>
        </DiceHeader>
      );
    case "DiceBlock":
      return (
        <DiceBlock
          static={false}
          diceBlock={widget}
          onChange={onChange}>
        </DiceBlock>
      );
    case "NoteBlock":
      return (
        <NoteBlock
          static={false}
          noteBlock={widget}
          onChange={onChange}>
        </NoteBlock>
      );
    case "NumberBlock":
      return (
        <NumberBlock
          static={false}
          numberBlock={widget}
          onChange={onChange}>
        </NumberBlock>
      );
    case "StatBlock":
      return (
        <StatBlock
          static={false}
          statBlock={widget}
          onChange={onChange}>
        </StatBlock>
      );
    case "TextBlock":
      return (
        <TextBlock
          static={false}
          textBlock={widget}
          onChange={onChange}>
        </TextBlock>
      );
    default:
      console.log(`Widget type '${widget?.type}' is not handled by SheetWidget component.`);
  }
}