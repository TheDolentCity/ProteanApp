import React, { useState } from 'react';
import SheetWidget from '../sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function NoteBlock(props) {
  const [noteBlock, setNoteBlock] = useState(props.noteBlock);

  const setNoteBlockData = (value, property) => {
    if (noteBlock[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on noteBlock object.");
    }
    else {
      let newNoteBlock = { ...noteBlock };
      newNoteBlock[property] = value;
      setNoteBlock(newNoteBlock);
      props?.onChange(newNoteBlock);
    }
  }

  return (
    <SheetWidget css="col-span-12 xl:col-span-6 bg-dirtBrown-600 dark:bg-dirtBrown-700 text-white">
      <div className="flex flex-col">
        <input
          type="text"
          className="acc-input input-text w-full p-1 elevation-0 text-lg 3xl:text-2xl font-bold"
          placeholder="enter title"
          value={noteBlock?.title}
          onChange={(e) => setNoteBlockData(e.target.value, 'title')}>
        </input>
        <TextareaAutosize
          rows={2}
          maxRows={100}
          className="acc-input input-text-area flex p-1 font-medium text-lighten-75"
          placeholder="enter description"
          value={noteBlock?.description}
          onChange={(e) => setNoteBlockData(e.target.value, 'description')} />
      </div>
    </SheetWidget>
  );
}