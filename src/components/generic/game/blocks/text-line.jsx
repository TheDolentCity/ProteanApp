import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useDocumentModeContext } from './../../../protean/view-management/view-document';
import { DocumentModes } from './../../../storage/constants';

export default function TextLine({ data, className, onChange }) {
  const [textLine, setTextLine] = useState(data);
	const mode = useDocumentModeContext();

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

	switch (mode) {
		case DocumentModes.READING:
			return (
				<div className="col-span-full w-full">
					<TextareaAutosize
						rows={1}
						maxRows={100}
						className={"input-text-area w-full " + className}
						placeholder="title"
						value={textLine?.text}
						disabled={true} />
				</div>
			);
		case DocumentModes.WRITING:
			return (
				<div className="col-span-full w-full">
					<TextareaAutosize
						rows={1}
						maxRows={100}
						className={"input-text-area w-full " + className}
						placeholder="title"
						value={textLine?.text}
						disabled={true} />
				</div>
			);
		case DocumentModes.PLAYING:
			return (
				<div className="col-span-full w-full">
					<TextareaAutosize
						rows={1}
						maxRows={100}
						className={"input-text-area w-full " + className}
						placeholder="title"
						value={textLine?.text}
						onChange={(e) => setTextLineData(e.target.value, 'text')} />
				</div>
			);
		default: throw new Error("Cannot handle rendering for given mode: " + mode);
	}
}

TextLine.defaultProps = {
  disabled: true
}