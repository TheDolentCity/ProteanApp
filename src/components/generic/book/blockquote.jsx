import React from 'react';

export function Blockquote({ css, children }) {
  return (
    <blockquote className={css}>
      {children}
    </blockquote>
  );
}

Blockquote.defaultProps = {
  css: "my-4 mb-4 mx-8 px-4 py-2 rounded-md leading-7 text-base font-medium text-gray-700 dark:text-gray-400 raise-5",
}