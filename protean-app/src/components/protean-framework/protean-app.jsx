import React from 'react';

export default function ProteanApp(props) {
  return (
    // dark container
    <div className="">
      <div className="flex w-screen h-screen max-w-screen max-h-screen font-sans text-gray-800 bg-blueGray-100 dark:text-gray-200 dark:bg-gray-900">
        {props.children}
      </div>
    </div>
  );
}