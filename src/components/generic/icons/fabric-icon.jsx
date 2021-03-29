import React from 'react';

export default function FabricIcon(props) {
  return (
    <i className={"ms-Icon ms-Icon--" + props.name + " " + props.css}></i>
  );
}