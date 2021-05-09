import React from 'react';

export default function Page(props) {
  return (
    <div className="flex-grow w-full max-w-md p-12 text-left">
      {props.children}
    </div>
  );
}