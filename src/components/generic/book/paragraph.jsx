import React from 'react';

export function Paragraph({ css, children }) {
  return (
    <p className={css}>
      {children}
    </p>
  );
}

Paragraph.defaultProps = {
  css: "mb-5 text-sm leading-normal font-normal",
}