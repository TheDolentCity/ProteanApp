import React, { useState } from 'react';
import { Widget } from './widget';
import FabricIcon from '../basic-inputs/fabric-icon';
import TextareaAutosize from 'react-textarea-autosize';

export default function StatBlock(props) {
  const [statBlock, setStatBlock] = useState(props.statBlock);

  const setStatBlockData = (value, property) => {
    if (statBlock[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on statBlock object.");
    }
    else {
      let newStatBlock = { ...statBlock };
      newStatBlock[property] = value;
      setStatBlock(newStatBlock);
      props?.onChange(newStatBlock);
    }
  }

  const setStatFieldData = (value, property, index) => {
    if (statBlock[property][index] === undefined) {
      console.log("Property: '" + property + "' with index '" + index + "'is undefined on statBlock object.");
    }
    else {
      let newStatBlock = { ...statBlock };
      newStatBlock[property][index] = value;
      setStatBlock(newStatBlock);
      props?.onChange(newStatBlock);
    }
  }
  
  return (
    <Widget css="col-span-12 col-span">
      <div className="flex flex-col">
        <TextareaAutosize
          value={statBlock?.title}
          rows={1}
          maxRows={100}
          className="input-text-area text-base font-semibold"
          placeholder="Stat Block Title"
          disabled={props.static === true} 
          onChange={(e) => setStatBlockData(e.target.value, 'title')}/>
        <div className="w-full py-1 items-center">
          {
            statBlock?.fields.map((field, index) => (
              <div key={index} className="flex items-start text-sm">
                <FabricIcon name="RadioBullet"></FabricIcon>
                <TextareaAutosize
                  value={field}
                  rows={1}
                  maxRows={100}
                  className="input-text-area w-full ml-1"
                  placeholder="enter title here"
                  disabled={props.static === true} 
                  onChange={e => setStatFieldData(e.target.value, 'fields', index)} />
              </div>
            ))
          }
        </div>
      </div>
    </Widget>
  );
}