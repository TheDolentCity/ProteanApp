import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import SheetWidget from './sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function NumberBlock(props) {
  const { globalState, dispatch } = useGlobalStore();
  const [title, setTitle] = useState(globalState.activeFile?.content.numberBlocks[props.index].title);
  const [fieldTitles, setFieldTitles] = useState(globalState.activeFile?.content.numberBlocks[props.index].fieldTitles);
  const [fieldValues, setFieldValues] = useState(globalState.activeFile?.content.numberBlocks[props.index].fieldValues);

  function updateFieldTitles(index, e) {
    let titles = [...fieldTitles];
    titles[index] = e.target.value;
    setFieldTitles(titles);
  }

  function updateFieldValues(index, e) {
    let values = [...fieldValues];
    values[index] = e.target.value;
    setFieldValues(values);
  }

  return (
    <SheetWidget css="col-span-12 2xl:col-span-6 bg-steelBlue-600 dark:bg-steelBlue-700 text-white">
      <div className="flex flex-col">
        <TextareaAutosize
          value={title}
          rows={1}
          maxRows={3}
          className="acc-input input-text-area text-lg 3xl:text-2xl font-bold"
          placeholder="Number Block Title"
          onChange={(e) => setTitle(e.target.value)}/>
        <div className="w-full py-1 items-center">
          {
            fieldTitles.map((fieldTitle, index) => (
              <div key={index} className="grid grid-cols-12 items-center">
                <input
                  type="text"
                  className="acc-input input-text col-span-9 text-lighten-75"
                  placeholder="enter title here"
                  value={fieldTitle}
                  onChange={e => updateFieldTitles(index, e)}>
                </input>
                <input
                  type="number"
                  className="acc-input input-text col-span-3"
                  placeholder="#"
                  value={fieldValues[index]}
                  onChange={e => updateFieldValues(index, e)}>
                </input>
              </div>
            ))
          }
        </div>
      </div>
    </SheetWidget>
  );
}