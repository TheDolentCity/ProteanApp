import React from 'react';

export function ThematicBreak({ css }) {
  return (
    <hr className={css}></hr>
  );
}

ThematicBreak.defaultProps = {
  css: "my-12 mb-12 leading-7 border-t border-black border-opacity-25 dark:border-white dark:border-opacity-25",
}