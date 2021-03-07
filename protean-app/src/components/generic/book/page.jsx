import React, { useState } from 'react';
import FabricIcon from '../icons/fabric-icon';

export default function Page(props) {
  return (
    <div className="flex flex-col w-full h-full pb-8 rounded-md shadow-md bg-white dark:bg-black">
      <div className="flex w-full p-4 text-2xl">
        <FabricIcon name="TextDocument" css="flex-none"></FabricIcon>
        <div className="flex-grow flex flex-col pl-4">
          <span className="flex-auto font-semibold text-sm">
            {props.title}
          </span>
          <span className="flex-auto text-xs">
            {props.parentTitle}
          </span>
        </div>
        <button className="flex-none">
          <FabricIcon name="MoreVertical" css=""></FabricIcon>
        </button>
      </div>
      <div className="flex-grow px-8 pt-4 pb-8 overflow-y-auto">
        {props.children}
      </div>
    </div>
  );
}