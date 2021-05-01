import React from 'react';

export default function Page(props) {
  return (
    <div className="flex-grow w-full max-w-half-screen px-12 text-left rounded">
      {props.children}
    </div>
  );
}