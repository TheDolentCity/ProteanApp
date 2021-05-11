import React, { useState } from 'react';
import { Widget } from '../widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function NumberBlock(props) {
  const [numberBlock, setNumberBlock] = useState(props.numberBlock);

  const setNumberBlockData = (value, property) => {
    if (numberBlock[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on numberBlock object.");
    }
    else {
      let newNumberBlock = { ...numberBlock };
      newNumberBlock[property] = value;
      setNumberBlock(newNumberBlock);
      props?.onChange(newNumberBlock);
    }
  }

  const setNumberFieldData = (value, property, index) => {
    if (numberBlock[property][index] === undefined) {
      console.log("Property: '" + property + "' with index '" + index + "'is undefined on numberBlock object.");
    }
    else {
      let newNumberBlock = { ...numberBlock };
      newNumberBlock[property][index] = value;
      setNumberBlock(newNumberBlock);
      props?.onChange(newNumberBlock);
    }
  }

  return (
    <Widget css="col-span-12 xl:col-span-6">
      <div className="flex flex-col">
        <TextareaAutosize
          value={numberBlock?.title}
          rows={1}
          maxRows={3}
          className="input-text-area text-base font-bold"
          placeholder="Number Block Title"
          disabled={props.static === true}
          onChange={(e) => setNumberBlockData(e.target.value, 'title')}/>
        <div className="w-full py-1 items-center">
          {
            numberBlock?.fieldTitles.map((fieldTitle, index) => (
              <div key={index} className="grid grid-cols-12 items-center">
                <input
                  type="text"
                  className="input-text-area col-span-9 text-sm"
                  placeholder="enter title here"
                  value={fieldTitle}
                  disabled={props.static === true}
                  onChange={e => setNumberFieldData(e.target.value, 'fieldTitles', index)}>
                </input>
                <input
                  type="number"
                  className="input-text-area col-span-3 text-sm font-semibold"
                  placeholder="#"
                  value={numberBlock?.fieldValues[index]}
                  disabled={props.static === true}
                  onChange={e => setNumberFieldData(e.target.value, 'fieldValues', index)}>
                </input>
              </div>
            ))
          }
        </div>
      </div>
    </Widget>
  );
}

NumberBlock.defaultProps = {
  static: true
}