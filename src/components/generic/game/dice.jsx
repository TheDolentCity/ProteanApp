import React from 'react';

export default function Dice(props) {
  return(
    <span>
      {props.count + "d" + props.size}
    </span>
  );
}