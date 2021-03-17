import React, { useState } from 'react';
import SheetWidget from './sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function DiceBlock(props) {
  const [dice, setDice] = useState(props.diceBlock.dice);
  const [title, setTitle] = useState(props.diceBlock.title);
  const [description, setDescription] = useState(props.diceBlock.description);

  return (
    <SheetWidget css="bg-magenta-600 dark:bg-magenta-800 text-white">
      <div className="flex flex-col">
        <div className="flex w-full pb-1 text-2xl">
          <input
            type="text"
            className="acc-input flex-none w-2/12 p-1 elevation-0 font-bold text-white text-opacity-80"
            placeholder="Dice"
            value={dice}
            onChange={(e) => setDice(e.target.value)}>
          </input>
          <input
            type="text"
            className="acc-input flex-none w-10/12 p-1 elevation-0 font-bold"
            placeholder="Dice Block Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}>
          </input>
        </div>
        <TextareaAutosize
          value={description}
          rows={2}
          maxRows={100}
          className="acc-input flex w-full p-1 elevation-0 font-medium text-white text-opacity-80"
          placeholder="Dice Block Description"
          onChange={(e) => setDescription(e.target.value)}/>
      </div>
    </SheetWidget>
  );
}