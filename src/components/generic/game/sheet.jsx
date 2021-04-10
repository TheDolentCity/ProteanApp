import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import BlockContainer from './blocks/block-container';
import NumberBlock from './blocks/number-block';
import DiceBlock from './blocks/dice-block';
import NoteBlock from './blocks/note-block';
import TextBlock from './blocks/text-block';

export default function Sheet(props) {
  const { globalState, dispatch } = useGlobalStore();
  const [sheet, setSheet] = useState(globalState.activeFile);

  const dispatchSheetData = (data) => {
    dispatch({
      type: "updateActiveFileContent",
      payload: {
        content: data
      }
    })
  }

  const setBlockData = (value, property, index) => {
    if (sheet[property][index] === undefined) {
      console.log("Property: '" + property + "' with index '" + index + "' is undefined on sheet object.");
    }
    else {
      let newSheet = { ...sheet };
      newSheet[property][index] = value;
      setSheet(newSheet, dispatchSheetData(newSheet));
    }
  }

  const updateSheet = (value, index) => {
    if (sheet?.content[index] === undefined) {
      console.log(`sheet.content[${index}] is undefined on sheet object.`);
    }
    else {
      let newSheet = { ...sheet };
      newSheet.content[index] = value;
      setSheet(newSheet, dispatchSheetData(newSheet));
    }
  }

  return (
    <BlockContainer>
      {
        sheet?.content?.map((widget, index) => (
          <Widget 
            key={index} 
            widget={widget} 
            onChange={(newWidget) => updateSheet(newWidget, index)}>
          </Widget>
        ))
      }
    </BlockContainer>
  );
}

function Widget(props) {
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
      console.log(`Widget type '${props?.widget?.type}' is not handled by dynamic Widget component.`);
  }
}