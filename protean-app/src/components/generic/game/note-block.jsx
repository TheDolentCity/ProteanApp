import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import SheetWidget from './sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function NoteBlock(props) {
  const { globalState, dispatch } = useGlobalStore();
  const [title, setTitle] = useState(globalState.activeFile?.content.noteBlocks[props.index].title);
  const [description, setDescription] = useState(globalState.activeFile?.content.noteBlocks[props.index].description);

  return (
    <SheetWidget css="col-span-12 2xl:col-span-6 bg-dirtBrown-600 dark:bg-dirtBrown-700 text-white">
      <div className="flex flex-col">
        <input
          type="text"
          className="acc-input input-text w-full p-1 elevation-0 text-lg 3xl:text-2xl font-bold"
          placeholder="enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}>
        </input>
        <TextareaAutosize
          rows={2}
          maxRows={100}
          className="acc-input input-text-area flex w-full p-1 elevation-0 font-medium text-lighten-75"
          placeholder="enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
      </div>
    </SheetWidget>
  );
}