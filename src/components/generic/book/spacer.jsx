import React from 'react';

export default function Spacer({space}) {
  return (
    <div className={"inline-block " + space}>
    </div>
  );
}

Spacer.defaultProps = {
  space: "my-4 mb-4 leading-7"
}