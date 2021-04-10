import React from 'react';

export default function BlockContainer(props) {
  return (
    <div className="grid grid-cols-12 gap-6 pb-4 w-full items-start">
      {props.children}
    </div>
  );
}