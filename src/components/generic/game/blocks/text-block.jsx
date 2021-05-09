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
      case "Header1": return "p-4 leading-none text-7xl tracking-tighter font-bold text-gray-900 dark:text-gray-100";
      case "Paragraph": return "text-sm leading-normal font-normal";
      default: return "";
    }
  }

  return (
    <Widget css="col-span-12">
      <TextareaAutosize
        rows={2}
        maxRows={100}
        className={"acc-input input-text-area col-span-12 " + textCss(props.textBlock?.textType)}
        placeholder="enter text"
        value={textBlock?.text}
        onInput={(e) => setTextBlockData(e.target.value, 'text')}
        disabled={props.static === true} />
    </Widget>
  );
}

TextBlock.defaultProps = {
  static: true
}