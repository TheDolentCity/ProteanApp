import React from 'react'

export default function Elevation(props) {
  return (
    <div className="shadow-md">
      {props.children}
    </div>
  );
}