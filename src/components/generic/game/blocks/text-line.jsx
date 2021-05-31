import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import PlayingMode from '../../../protean/app-modes/playing-mode';
import ReadingMode from '../../../protean/app-modes/reading-mode';
import WritingMode from '../../../protean/app-modes/writing-mode';

export default function TextLine({ data, className, onChange }) {
  const [textLine, setTextLine] = useState(data);

  const setTextLineData = (value, property) => {
    if (textLine[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on TextLine object.");
    }
    else {
      let newData = { ...textLine };
      newData[property] = value;
      setTextLine(newData);
      onChange(newData);
    }
  }

  return (
		<div className="w-full">
			<ReadingMode>
				<TextareaAutosize
					rows={1}
					maxRows={100}
					className={"input-text-area w-full " + className}
					placeholder="title"
					value={textLine?.text}
					disabled={true} />
			</ReadingMode>
			<WritingMode>
				<TextareaAutosize
					rows={1}
					maxRows={100}
					className={"input-text-area w-full " + className}
					placeholder="title"
					value={textLine?.text}
					disabled={true} />
			</WritingMode>
			<PlayingMode>
				<TextareaAutosize
					rows={1}
					maxRows={100}
					className={"input-text-area w-full " + className}
					placeholder="title"
					value={textLine?.text}
					onChange={(e) => setTextLineData(e.target.value, 'text')} />
			</PlayingMode>
		</div>
  );
}

TextLine.defaultProps = {
  disabled: true
}