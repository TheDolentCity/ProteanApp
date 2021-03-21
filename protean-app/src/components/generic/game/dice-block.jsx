import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import SheetWidget from './sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function DiceBlock(props) {
  const { globalState, dispatch } = useGlobalStore();
  const [title, setTitle] = useState(globalState.activeFile?.content.diceBlocks[props.index].title);
  const [dice, setDice] = useState(globalState.activeFile?.content.diceBlocks[props.index].dice);
  const [description, setDescription] = useState(globalState.activeFile?.content.diceBlocks[props.index].description);

  return (
    <SheetWidget css="col-span-12 lg:col-span-6 bg-magenta-600 dark:bg-magenta-900 text-white">
      <div className="flex flex-col">
        <div className="grid grid-cols-12 mb-1 items-center">
          <input
            type="text"
            className="acc-input input-text col-span-9 text-xl xl:text-2xl font-bold"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}>
          </input>
          <input
            type="text"
            className="acc-input input-text col-span-3 text-right text-xl xl:text-2xl font-bold text-lighten-75"
            placeholder="dice"
            value={dice}
            onChange={(e) => setDice(e.target.value)}>
          </input>
        </div>
        <TextareaAutosize
          rows={3}
          maxRows={100}
          className="acc-input input-text-area font-medium text-lighten-75"
          placeholder="enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
      </div>
    </SheetWidget>
  );
}