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
  css: "my-4 mb-4 leading-7 text-base font-normal",
}

ListNumbered.defaultProps = {
  css: "my-4 mb-4 leading-7 text-base font-normal",
}