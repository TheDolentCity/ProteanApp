import React from 'react';

export default function Columns({ count, className, children }) {
  return (
    <div className={className + (" col-count-" + count)}>
      {children}
    </div>
  );
}

Columns.defaultProps = {
  className: "w-full mt-3 mb-8 col-gap-4",
}