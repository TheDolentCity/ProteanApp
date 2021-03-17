import React from 'react';

export function Paragraph({ css, children }) {
  return (
    <p className={css}>
      {children}
    </p>
  );
}

Paragraph.defaultProps = {
  css: "my-4 mb-4 leading-7 text-base font-normal text-gray-700 dark:text-gray-400",
}