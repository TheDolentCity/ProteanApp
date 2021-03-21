import React from "react";

export default function SheetWidget(props) {
  return (
    <div className={"p-2 xl:p-4 rounded-md shadow-md " + props.css}>
      {props.children}
    </div>
  );
}