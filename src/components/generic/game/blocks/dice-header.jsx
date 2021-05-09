import React, { useState } from 'react';
import { Widget } from '../widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function DiceHeader(props) {
  const [diceHeader, setDiceHeader] = useState(props.diceHeader);

  const setDiceHeaderData = (value, property) => {
    if (diceHeader[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on DiceHeader object.");
    }
    else {
      let newDiceHeader = { ...diceHeader };
      newDiceHeader[property] = value;
      setDiceHeader(newDiceHeader);
      props?.onChange(newDiceHeader);
    }
  }

  return (
    <div className="grid grid-cols-12 col-span-12 items-center">
      <TextareaAutosize
        rows={1}
        maxRows={100}
        className="input-text-area col-span-9 text-base font-bold"
        placeholder="title"
        value={diceHeader?.title}
        onChange={(e) => setDiceHeaderData(e.target.value, 'title')}
        disabled={props.static === true} />
      <TextareaAutosize
        rows={1}
        maxRows={100}
        className="input-text-area col-span-3 text-base font-bold"
        placeholder="dice"
        value={diceHeader?.dice}
        onChange={(e) => setDiceHeaderData(e.target.value, 'dice')}
        disabled={props.static === true} />
    </div>
  );
}

DiceHeader.defaultProps = {
  static: true
}