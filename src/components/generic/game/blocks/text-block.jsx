import React, { useEffect, useState } from 'react';
import { Widget } from '../widget';
import TextareaAutosize from 'react-textarea-autosize';

export default function TextBlock(props) {
  const [textBlock, setTextBlock] = useState(props.textBlock);

  const setTextBlockData = (value, property) => {
    if (textBlock[property] === undefined) {
      console.log("Property: '" + property + "' is undefined on textBlock object.");
    }
    else {
      let newTextBlock = { ...textBlock };
      newTextBlock[property] = value;
      setTextBlock(newTextBlock);
      props?.onChange(newTextBlock);
    }
  }

  const textCss = (textType) => {
    switch (textType) {
      case "Header1": return "p-1 mt-8 mb-3 leading-tight text-3xl xl:text-5xl font-bold";
      case "Paragraph": return "my-4 leading-7 text-base xl:text-lg font-normal";
      default: return "";
    }
  }

  return (
    <TextareaAutosize
      rows={2}
      maxRows={100}
      className={"acc-input input-text-area col-span-12 " + textCss(props.textBlock?.textType)}
      placeholder="enter text"
      value={textBlock?.text}
      onInput={(e) => setTextBlockData(e.target.value, 'text')}
      disabled={props.static === true} />
  );
}

TextBlock.defaultProps = {
  static: true
}