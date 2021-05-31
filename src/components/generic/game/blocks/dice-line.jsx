import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import PlayingMode from '../../../protean/app-modes/playing-mode';
import ReadingMode from '../../../protean/app-modes/reading-mode';
import WritingMode from '../../../protean/app-modes/writing-mode';

export default function DiceLine({ data, className, onChange }) {
  const [diceLine, setDiceLine] = useState(data);

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

  return (
		<div className="w-full">
			<ReadingMode>
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
			</ReadingMode>
			<WritingMode>
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
			</WritingMode>
			<PlayingMode>
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
			</PlayingMode>
		</div>
  );
}

DiceLine.defaultProps = {
  disabled: true
}