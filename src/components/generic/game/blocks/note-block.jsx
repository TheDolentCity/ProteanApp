import React, { useState } from 'react';
import { Widget } from '../widget';
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
			if (props?.onChange !== undefined) {
				props.onChange(newNoteBlock);
			}
    }
  }

  return (
    <Widget css="col-span-12 xl:col-span-6">
      <div className="flex flex-col">
        <TextareaAutosize
          rows={2}
          maxRows={100}
          className="input-text-area text-base font-bold"
          placeholder="enter title"
          value={noteBlock?.title}
          onChange={(e) => setNoteBlockData(e.target.value, 'title')} 
					disabled={props.static === true} />
        <TextareaAutosize
          rows={2}
          maxRows={100}
          className="input-text-area text-sm"
          placeholder="enter description"
          value={noteBlock?.description}
          onChange={(e) => setNoteBlockData(e.target.value, 'description')} 
					disabled={props.static === true} />
      </div>
    </Widget>
  );
}

NoteBlock.defaultProps = {
  static: true
}