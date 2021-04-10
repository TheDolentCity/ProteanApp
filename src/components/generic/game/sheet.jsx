import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import BlockContainer from './blocks/block-container';
import NumberBlock from './blocks/number-block';
import DiceBlock from './blocks/dice-block';
import NoteBlock from './blocks/note-block';
import TextBlock from './blocks/text-block';

export default function Sheet(props) {
  const { globalState, dispatch } = useGlobalStore();
  const [sheet, setSheet] = useState(globalState.activeFile?.content);

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

  return (
    <BlockContainer>
      {/* {
        sheet?.map((widget, index) => {
          switch (widget) {
            case "TextBlock":
              return <TextBlock
                key={index}
                textBlock={widget}
                static={false}
                onChange={(newTextBlock) => setBlockData(newTextBlock, 'textBlocks', index)}>
              </TextBlock>;
            case "NoteBlock":
              return <NumberBlock
                key={index}
                numberBlock={widget}
                static={false}
                onChange={(newNumberBlock) => setBlockData(newNumberBlock, 'numberBlocks', index)}>
              </NumberBlock>;
          }
        })

        sheet?.map((widget, index) => (
          <
        ))
      } */}
      {
        sheet?.textBlocks.map((textBlock, index) => (
          <TextBlock
            key={index}
            textBlock={textBlock}
            static={false}
            onChange={(newTextBlock) => setBlockData(newTextBlock, 'textBlocks', index)}>
          </TextBlock>
        ))
      }
      {
        sheet?.numberBlocks.map((numberBlock, index) => (
          <NumberBlock 
            key={index}
            numberBlock={numberBlock}
            static={false}
            onChange={(newNumberBlock) => setBlockData(newNumberBlock, 'numberBlocks', index)}>
          </NumberBlock>
        ))
      }
      {
        sheet?.diceBlocks.map((diceBlock, index) => (
          <DiceBlock 
            key={index}
            diceBlock={diceBlock}
            static={false}
            onChange={(newDiceBlock) => setBlockData(newDiceBlock, 'diceBlocks', index)}>
          </DiceBlock>
        ))
      }
      {
        sheet?.noteBlocks.map((noteBlock, index) => (
          <NoteBlock 
            key={index}
            noteBlock={noteBlock} 
            static={false}
            onChange={(newNoteBlock) => setBlockData(newNoteBlock, 'noteBlocks', index)}>
          </NoteBlock>
        ))
      }
    </BlockContainer>
  );
}