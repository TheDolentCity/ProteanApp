import React from 'react';

export default function Page(props) {
  return (
    <div className="flex-grow flex h-full justify-center sm:px-12 md:px-24 xl:px-36 3xl:px-60 overflow-y-auto scroll">
      {props.children}
    </div>
  );
}