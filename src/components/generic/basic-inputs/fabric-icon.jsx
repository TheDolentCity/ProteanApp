import React from 'react';

export default function FabricIcon({ name, className }) {
  return (
    <i className={"ms-Icon ms-Icon--" + name + " " + className}></i>
  );
}