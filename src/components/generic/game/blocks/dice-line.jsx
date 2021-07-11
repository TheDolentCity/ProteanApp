import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useDocumentModeContext } from './../../../protean/view-management/view-document';
import { DocumentModes } from './../../../storage/constants';

export default function DiceLine({ data, className, onChange }) {
  const [diceLine, setDiceLine] = useState(data);
	const mode = useDocumentModeContext();

  const setDiceLineData = (value, property) => {
    if (diceLine[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on DiceLine object.");
    }
    else {
      let newDiceLine = { ...diceLine };
      newDiceLine[property] = value;
      setDiceLine(newDiceLine);
      onChange(newDiceLine);
    }
  }

	switch (mode) {
		case DocumentModes.READING:
			return (
				<div className="col-span-full w-full">
					<div className="flex w-full items-center">
						<TextareaAutosize
							rows={1}
							maxRows={100}
							className={"input-text-area flex flex-grow " + className}
							placeholder="title"
							value={diceLine?.title}
							disabled={true} />
						<TextareaAutosize
							rows={1}
							maxRows={100}
							className={"input-text-area flex-shrink min-w-16 max-w-16 " + className}
							placeholder="dice"
							value={diceLine?.dice}
							disabled={true} />
					</div>
				</div>
			);
		case DocumentModes.WRITING:
			return (
				<div className="col-span-full w-full">
					<div className="flex w-full items-center">
						<TextareaAutosize
							rows={1}
							maxRows={100}
							className={"input-text-area flex flex-grow " + className}
							placeholder="title"
							value={diceLine?.title}
							disabled={true} />
						<TextareaAutosize
							rows={1}
							maxRows={100}
							className={"input-text-area flex-shrink min-w-16 max-w-16 " + className}
							placeholder="dice"
							value={diceLine?.dice}
							disabled={true} />
					</div>
				</div>
			);
		case DocumentModes.PLAYING:
			return (
				<div className="col-span-full w-full">
					<div className="flex w-full items-center">
					<TextareaAutosize
						rows={1}
						maxRows={100}
							className={"input-text-area flex flex-grow " + className}
						placeholder="title"
						value={diceLine?.title}
						onChange={(e) => setDiceLineData(e.target.value, 'title')} />
					<TextareaAutosize
						rows={1}
						maxRows={100}
						className={"input-text-area flex-shrink min-w-16 max-w-16 " + className}
						placeholder="dice"
						value={diceLine?.dice}
						onChange={(e) => setDiceLineData(e.target.value, 'dice')} />
					</div>
				</div>
			);
		default: return <span></span>;
	}
}

DiceLine.defaultProps = {
  disabled: true
}