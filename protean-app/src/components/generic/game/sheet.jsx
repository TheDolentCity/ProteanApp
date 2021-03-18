import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Frame from './frame-block';
import DiceBlock from '../game/dice-block';
import NoteBlock from './note-block';

export default function Sheet(props) {
  const [title, setTitle] = useState(props?.file?.content.name);

  return (
    <div className="space-y-6">
      <TextareaAutosize
        value={title}
        rows={1}
        maxRows={100}
        className="acc-input max-w-full elevation-0 mt-8 mb-3 leading-tight text-5xl font-bold"
        placeholder="Character Title"
        onChange={(e) => setTitle(e.target.value)} />
      <div className="w-full space-y-6">
        {
          props?.file?.content.frames.map(frame => (
            <Frame key={frame.title} frame={frame}></Frame>
          ))
        }
      </div>
      <div className="w-full space-y-6">
        {
          props?.file?.content.diceBlocks.map(diceBlock => (
            <DiceBlock key={diceBlock.title} diceBlock={diceBlock}></DiceBlock>
          ))
        }
      </div>
      <div className="w-full space-y-6">
        {
          props?.file?.content.noteBlocks.map(noteBlock => (
            <NoteBlock key={noteBlock.title} noteBlock={noteBlock}></NoteBlock>
          ))
        }
      </div>
    </div>
  );
}

Sheet.defaultProps = {
  file: {
    uuid: "CarterGuyusSheet",
    type: "SHEET",
    title: "Carter Guyus",
    parentTitle: "Character Sheet",
    content: {
      name: "Default Name",
      frames: [
        {
          title: "Body",
          currentScore: 5,
          maxScore: 10,
          currentDefense: 2,
          maxDefense: 3,
        },
        {
          title: "Fortune",
          currentScore: 5,
          maxScore: 6,
          currentDefense: 0,
          maxDefense: 1,
        }
      ],
      diceBlocks: [
        {
          dice: "1d4",
          title: "Brawn",
          description: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
        {
          dice: "2d6",
          title: "Cunning",
          description: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
        {
          dice: "3d8",
          title: "Cool",
          description: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
        {
          dice: "1d10",
          title: "Cog Hammer",
          description: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
        {
          dice: "2d12",
          title: "Blunderbuss",
          description: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
        {
          dice: "3d20",
          title: "Bloodbending",
          description: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
      ],
      noteBlocks: [
        {
          title: "asdf",
          description: "asdf",
        },
        {
          title: "jkl;",
          description: "jkl;",
        },
      ],
    }
  }
}