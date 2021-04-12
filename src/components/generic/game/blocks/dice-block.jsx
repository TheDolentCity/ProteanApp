import React, { useState } from 'react';
import { Widget } from '../widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function DiceBlock(props) {
  const [diceBlock, setDiceBlock] = useState(props.diceBlock);

  const setDiceBlockData = (value, property) => {
    if (diceBlock[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on diceBlock object.");
    }
    else {
      let newDiceBlock = { ...diceBlock };
      newDiceBlock[property] = value;
      setDiceBlock(newDiceBlock);
      props?.onChange(newDiceBlock);
    }
  }

  return (
    <Widget css="col-span-12 xl:col-span-6 bg-forestGreen-600 dark:bg-forestGreen-700 text-white">
      <div className="flex flex-col">
        <div className="grid grid-cols-12 mb-1 items-center">
          <input
            type="text"
            className="acc-input input-text col-span-9 text-lg 3xl:text-2xl font-bold"
            placeholder="enter title"
            value={diceBlock?.title}
            onChange={(e) => setDiceBlockData(e.target.value, 'title')}
            disabled={props.static === true}>
          </input>
          <input
            type="text"
            className="acc-input input-text col-span-3 text-right text-lg 3xl:text-2xl font-bold text-lighten-75"
            placeholder="dice"
            value={diceBlock?.dice}
            onChange={(e) => setDiceBlockData(e.target.value, 'dice')}
            disabled={props.static === true}>
          </input>
        </div>
        <TextareaAutosize
          rows={2}
          maxRows={100}
          className="acc-input input-text-area font-medium text-lighten-75"
          placeholder="enter description"
          value={diceBlock?.description}
          onChange={(e) => setDiceBlockData(e.target.value, 'description')}
          disabled={props.static === true} />
      </div>
    </Widget>
  );
}

DiceBlock.defaultProps = {
  static: true
}