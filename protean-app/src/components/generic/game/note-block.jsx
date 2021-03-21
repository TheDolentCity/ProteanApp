import React, { useState } from 'react';
import SheetWidget from './sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function NoteBlock(props) {
  const [title, setTitle] = useState(props.noteBlock.title);
  const [description, setDescription] = useState(props.noteBlock.description);

  return (
    <SheetWidget css="bg-yellow-300 dark:bg-yellow-600 text-black">
      <div className="flex flex-col">
        <div className="flex w-full pb-1 text-2xl">
          <input
            type="text"
            className="acc-input flex-grow p-1 elevation-0 font-bold"
            placeholder="Dice Block Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}>
          </input>
        </div>
        <TextareaAutosize
          value={description}
          rows={2}
          maxRows={100}
          className="acc-input flex w-full p-1 elevation-0 font-medium text-black text-opacity-80"
          placeholder="Dice Block Description"
          onChange={(e) => setDescription(e.target.value)} />
      </div>
    </SheetWidget>
  );
}