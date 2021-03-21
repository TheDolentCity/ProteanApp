import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import TextareaAutosize from 'react-textarea-autosize';
import Frame from './number-block';
import DiceBlock from '../game/dice-block';
import NoteBlock from './note-block';
import NumberBlock from './number-block';

export default function Sheet(props) {
  const { globalState, dispatch } = useGlobalStore();

  // const [title, setTitle] = useState(props?.file?.content.name);
  // const [content, setContent] = useState(props?.file?.content);
  // const [numberBlocks, setNumberBlocks] = useState(props?.file?.content?.numberBlocks);
  
  // function numberBlocksChangeHandler(blockKey, fieldKey, value) {
  //   const data = content;
  //   console.log("============== Data ==============");
  //   console.log(JSON.stringify(data.numberBlocks));
  //   console.log("============== BlockKey ==============");
  //   console.log(JSON.stringify(blockKey));
  //   console.log("============== FieldKey ==============");
  //   console.log(JSON.stringify(fieldKey));
  //   console.log("============== Value =================");
  //   console.log(JSON.stringify(value));
  //   console.log("============== Data[BlockKey] =================");
  //   console.log(JSON.stringify(data.numberBlocks[blockKey]));
  //   console.log("============== Data[BlockKey][fieldKey] =================");
  //   console.log(JSON.stringify(data.numberBlocks[blockKey][fieldKey]));
  //   console.log("======================================");
  //   data.numberBlocks[blockKey][fieldKey] = value;
  //   setContent(data);
  // }

  function handleSubmit(event) {
    alert('A form was submitted');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* <TextareaAutosize
        value={title}
        rows={1}
        maxRows={100}
        className="acc-input max-w-full elevation-0 mt-8 mb-3 leading-tight text-5xl font-bold"
        placeholder="Character Title"
        onChange={(e) => setTitle(e.target.value)} /> */}
      <div className="w-full space-y-6">
        {
          globalState?.activeFile?.content?.numberBlocks.map((numberBlock, index) => {
            console.log("SheetKey: " + index);
            return <NumberBlock key={index} index={index}></NumberBlock>
          })
        }
      </div>
    </form>
  );
}