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
  css: "my-4 mb-4 leading-7 text-base font-normal text-gray-700 dark:text-gray-400",
}

ListNumbered.defaultProps = {
  css: "my-4 mb-4 leading-7 text-base font-normal text-gray-700 dark:text-gray-400",
}