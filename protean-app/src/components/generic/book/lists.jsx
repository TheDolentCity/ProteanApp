import React from 'react';

export function ListBulleted(props) {
  return (
    <ul className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle + " " +
        "ml-4 list-disc list-outside"
      }>
      {props.children}
    </ul>
  );
}

export function ListNumbered(props) {
  return (
    <ol className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle + " " +
        "ml-4 list-decimal list-outside"
      }>
      {props.children}
    </ol>
  );
}

export function ListItem(props) {
  return (
    <li className="my-2">
      {props.children}
    </li>
  );
}

ListBulleted.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "",
  fontSize: "base",
  fontStyle: "normal"
}

ListNumbered.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "",
  fontSize: "base",
  fontStyle: "normal"
}