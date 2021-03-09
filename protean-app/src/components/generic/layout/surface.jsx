import React from 'react';

export default function Surface(props) {
  return (
    <div className={"rounded shadow-md text-left bg-white dark:bg-gray-700" + props.css}>
      <div className="flex flex-col">
        {props.children}
      </div>
    </div>
  );
}

export function SurfaceSection(props) {
  return (
    <div className="flex-auto">
      {props.children}
    </div>
  );
}