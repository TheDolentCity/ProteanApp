import React from 'react';

export function Blockquote({ css, children }) {
  return (
    <blockquote className={css}>
      {children}
    </blockquote>
  );
}

Blockquote.defaultProps = {
  css: "w-full col-span mb-5 p-5 text-sm leading-normal font-semibold italic rounded-md raise-5",
}