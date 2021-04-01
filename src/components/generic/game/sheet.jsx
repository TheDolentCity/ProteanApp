import React, { useEffect, useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import TextareaAutosize from 'react-textarea-autosize';
import BlockContainer from './block-container';
import NumberBlock from './number-block';
import DiceBlock from '../game/dice-block';
import NoteBlock from './note-block';

export default function Sheet(props) {
  const { globalState, dispatch } = useGlobalStore();
  const [sheet, setSheet] = useState(globalState.activeFile?.content);

  const setSheetData = (value, property) => {
    if (sheet[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on sheet object.");
    }
    else {
      let newSheet = { ...sheet };
      newSheet[property] = value;
      setSheet(newSheet);
    }
  }

  const setBlockData = (value, property, index) => {
    if (sheet[property][index] === undefined) {
      console.log("Property: '" + property + "' with index '" + index + "' is undefined on sheet object.");
    }
    else {
      let newSheet = { ...sheet };
      newSheet[property][index] = value;
      setSheet(newSheet);
    }
  }

  return (
    <BlockContainer>
      <TextareaAutosize
        value={sheet.title}
        rows={1}
        maxRows={3}
        className="acc-input flex col-span-12 p-1 mt-8 mb-3 elevation-0 text-3xl xl:text-5xl leading-tight font-bold"
        placeholder="enter title"
        onChange={(e) => setSheetData(e.target.value, 'title')} />
      {
        sheet?.numberBlocks.map((numberBlock, index) => (
          <NumberBlock 
            key={index} 
            index={index}
            dice={numberBlock}
            onChange={(newNumberBlock) => setBlockData(newNumberBlock, 'numberBlocks', index)}>
          </NumberBlock>
        ))
      }
      {
        sheet?.diceBlocks.map((diceBlock, index) => (
          <DiceBlock 
            key={index} 
            index={index}
            diceBlock={diceBlock}
            onChange={(newDiceBlock) => setBlockData(newDiceBlock, 'diceBlocks', index)}>
          </DiceBlock>
        ))
      }
      {
        sheet?.noteBlocks.map((noteBlock, index) => (
          <NoteBlock 
            key={index} 
            index={index} 
            noteBlock={noteBlock} 
            onChange={(newNoteBlock) => setBlockData(newNoteBlock, 'noteBlocks', index)}>
          </NoteBlock>
        ))
      }
    </BlockContainer>
  );
}