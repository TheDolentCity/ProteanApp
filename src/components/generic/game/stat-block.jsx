import React, { useState } from 'react';
import { Widget } from './widget';
import FabricIcon from '../basic-inputs/fabric-icon';
import TextareaAutosize from 'react-textarea-autosize';

export default function StatBlock(props) {
  const [statBlock, setStatBlock] = useState(props.statBlock);
  
  return (
    <Widget css="col-span bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col">
        <TextareaAutosize
          value={statBlock?.title}
          rows={1}
          maxRows={100}
          className="acc-focus input-text-area text-base 3xl:text-2xl font-bold"
          placeholder="Stat Block Title"
          disabled={props.static === true} />
        <div className="w-full py-1 items-center">
          {
            statBlock?.fields.map((field, index) => (
              <div className="flex items-center">
                <FabricIcon name="RadioBullet" className=""></FabricIcon>
                <TextareaAutosize
                  key={index}
                  value={field}
                  rows={1}
                  maxRows={100}
                  className="acc-focus input-text-area w-full"
                  placeholder="enter title here"
                  disabled={props.static === true} />
              </div>
            ))
          }
        </div>
      </div>
    </Widget>
  );
}