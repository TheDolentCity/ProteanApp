import React from 'react';

export function Blockquote({ css, children }) {
  return (
    <blockquote className={css}>
      {children}
    </blockquote>
  );
}

Blockquote.defaultProps = {
  css: "w-full col-span mb-5 px-5 pt-5 -pb-5 text-sm leading-normal font-semibold italic rounded raise-5",
}