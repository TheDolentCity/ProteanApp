import React from 'react';
import Frame from './frame-block';
import DiceBlock from '../game/dice-block';
import { Header1 } from '../book/header';
import { Paragraph } from '../book/paragraph';

export default function Sheet(props) {
  return (
    <div className=" space-y-6">
      <Header1>
        {props?.file?.content.name}
      </Header1>
      <Paragraph>
        {props?.file?.content.description}
      </Paragraph>
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
      description: "description description description description description description description description description description description description description description description description description description description description description description description description description",
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
      ]
    }
  }
}