import React from 'react';

export function ListBulleted({ css, children }) {
  return (
    <ul className={"ml-4 list-disc list-outside " + css}>
      {children}
    </ul>
  );
}

export function ListNumbered({ css, children }) {
  return (
    <ul className={"ml-4 list-decimal list-outside " + css}>
      {children}
    </ul>
  );
}

export function ListItem({ children }) {
  return (
    <li className="my-2">
      {children}
    </li>
  );
}

ListBulleted.defaultProps = {
  css: "mb-5 text-sm leading-normal font-normal",
}

ListNumbered.defaultProps = {
  css: "mb-5 text-sm leading-normal font-normal",
}