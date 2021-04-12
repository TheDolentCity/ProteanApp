import React from "react";

export function WidgetContainer(props) {
  return (
    <div className="grid grid-cols-12 gap-6 pb-4 w-full items-start">
      {props.children}
    </div>
  );
}

export function Widget(props) {
  return (
    <div className={"p-2 xl:p-4 rounded-md shadow-md " + props.css}>
      {props.children}
    </div>
  );
}