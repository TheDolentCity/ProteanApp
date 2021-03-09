import React from 'react';

export default function ProteanAppBody(props) {
  return (
    <div className="flex-grow flex h-full overflow-hidden">
      {props.children}
    </div>
  );
}