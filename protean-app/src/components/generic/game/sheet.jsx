import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import TextareaAutosize from 'react-textarea-autosize';
import BlockContainer from './block-container';
import NumberBlock from './number-block';
import DiceBlock from '../game/dice-block';
import NoteBlock from './note-block';

export default function Sheet(props) {
  const { globalState, dispatch } = useGlobalStore();
  const [title, setTitle] = useState(globalState.activeFile?.content.title);

  return (
    <BlockContainer>
      <TextareaAutosize
        value={title}
        rows={1}
        maxRows={3}
        className="acc-input flex col-span-12 p-1 mt-8 mb-3 elevation-0 text-3xl xl:text-5xl leading-tight font-bold"
        placeholder="enter title"
        onChange={(e) => setTitle(e.target.value)} />
      {
        globalState?.activeFile?.content?.numberBlocks.map((numberBlock, index) => (
          <NumberBlock key={index} index={index}></NumberBlock>
        ))
      }
      {
        globalState?.activeFile?.content?.diceBlocks.map((diceBlock, index) => (
          <DiceBlock key={index} index={index}></DiceBlock>
        ))
      }
      {
        globalState?.activeFile?.content?.noteBlocks.map((noteBlock, index) => (
          <NoteBlock key={index} index={index}></NoteBlock>
        ))
      }
    </BlockContainer>
  );
}