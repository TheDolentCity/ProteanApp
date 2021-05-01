import React from "react";

export function WidgetContainer(props) {
  return (
    // <div className="grid grid-cols-12 gap-6 mb-8 w-full items-start">
    <div className="col-span grid grid-cols-12 gap-6 mb-8 w-full items-stretch">
      {props.children}
    </div>
  );
}

export function Widget(props) {
  return (
    <div className={"col-span p-2 xl:p-4 rounded " + props.css}>
      {props.children}
    </div>
  );
}