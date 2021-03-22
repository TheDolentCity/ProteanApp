import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import SheetWidget from './sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function DiceBlock(props) {
  const { globalState, dispatch } = useGlobalStore();

  // Title data. Override with props if this is supposed to be a static dice block.
  const [title, setTitle] = useState(
    props.staticData === undefined ? 
      globalState.activeFile?.content.diceBlocks[props.index].title 
      :
      props.staticData.title
  );

  // Dice data. Override with props if this is supposed to be a static dice block.
  const [dice, setDice] = useState(
    props.staticData === undefined ? 
      globalState.activeFile?.content.diceBlocks[props.index].dice 
      :
      props.staticData.dice
  );

  // Description data. Override with props if this is supposed to be a static dice block.
  const [description, setDescription] = useState(
    props.staticData === undefined ? 
      globalState.activeFile?.content.diceBlocks[props.index].description 
      :
      props.staticData.description
  );

  return (
    <SheetWidget css="col-span-12 2xl:col-span-6 bg-forestGreen-600 dark:bg-forestGreen-700 text-white">
      <div className="flex flex-col">
        <div className="grid grid-cols-12 mb-1 items-center">
          <input
            type="text"
            className="acc-input input-text col-span-9 text-lg 3xl:text-2xl font-bold"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={props.staticData !== undefined}>
          </input>
          <input
            type="text"
            className="acc-input input-text col-span-3 text-right text-lg 3xl:text-2xl font-bold text-lighten-75"
            placeholder="dice"
            value={dice}
            onChange={(e) => setDice(e.target.value)}
            disabled={props.staticData !== undefined}>
          </input>
        </div>
        <TextareaAutosize
          rows={3}
          maxRows={100}
          className="acc-input input-text-area font-medium text-lighten-75"
          placeholder="enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={props.staticData !== undefined}/>
      </div>
    </SheetWidget>
  );
}