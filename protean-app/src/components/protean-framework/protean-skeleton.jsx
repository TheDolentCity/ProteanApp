import React from 'react'

export default function ProteanSkeleton(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen font-sans bg-protean-light text-protean-dark dark:bg-protean-dark dark:text-protean-light">
      {props.children}
    </div>
  );
}

export function ProteanAppBody(props) {
  return (
    <div className="flex-grow flex flex-nowrap w-full whitespace-nowrap overflow-hidden">
      {props.children}
    </div>
  );
}