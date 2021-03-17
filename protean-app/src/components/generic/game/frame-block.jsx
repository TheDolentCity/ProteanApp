import React, { useState } from 'react';
import SheetWidget from './sheet-widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function DiceBlock(props) {
  const [title, setTitle] = useState(props.frame.title);
  const [currentScore, setCurrentScore] = useState(props.frame.currentScore);
  const [maxScore, setMaxScore] = useState(props.frame.maxScore);
  const [currentDefense, setCurrentDefense] = useState(props.frame.currentDefense);
  const [maxDefense, setMaxDefense] = useState(props.frame.maxDefense);

  return (
    <SheetWidget css="bg-cyan-600 dark:bg-cyan-800 text-white">
      <div className="flex flex-col">
        <div className="flex w-full text-2xl font-bold">
          {title}
        </div>
        <div className="flex w-full pb-1 items-center">
          <span className="flex-none pr-2 font-medium text-white text-opacity-80">
            Current Score
          </span>
          <input
            type="text"
            className="acc-input flex-none w-1/12 p-1 elevation-0 justify-center font-medium"
            placeholder="#"
            value={currentScore}
            onChange={(e) => setCurrentScore(e.target.value)}>
          </input>
          <span className="flex-none pr-2 text-white text-opacity-80">
            Max Score
          </span>
          <input
            type="text"
            className="acc-input flex-none w-1/12 p-1 elevation-0 justify-center font-medium"
            placeholder="#"
            value={maxScore}
            onChange={(e) => setMaxScore(e.target.value)}>
          </input>
        </div>
        <div className="flex w-full pb-1 items-center">
          <span className="flex-none pr-2 font-medium text-white text-opacity-80">
            Current Defense
          </span>
          <input
            type="text"
            className="acc-input flex-none w-1/12 p-1 elevation-0 justify-center font-medium"
            placeholder="#"
            value={currentDefense}
            onChange={(e) => setCurrentDefense(e.target.value)}>
          </input>
          <span className="flex-none pr-2 text-white text-opacity-80">
            Max Defense
          </span>
          <input
            type="text"
            className="acc-input flex-none w-1/12 p-1 elevation-0 justify-center font-medium"
            placeholder="#"
            value={maxDefense}
            onChange={(e) => setMaxDefense(e.target.value)}>
          </input>
        </div>
      </div>
    </SheetWidget>
  );
}