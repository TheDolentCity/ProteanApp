import React from 'react';
import FabricIcon from "../../generic/basic-inputs/fabric-icon";
import { Header2 } from '../../generic/book/header';

export default function Tool(props) {
  return (
    <div className="flex flex-col w-full mx-auto pb-12">
      <div className="flex-none w-full pb-2 text-2xl font-semibold truncate text-gray-900 dark:text-gray-100">
        {props.header}
      </div>
      <div className="flex-grow h-full overflow-y-auto">
        {props.children}
      </div>
    </div>
  );
}

export function ToolRow(props) {
  return (
    <div className="acc-focus flex w-full max-w-full mx-auto rounded-sm text-sm overflow-hidden">
      {props.children}
    </div>
  );
}

export function ToolButton(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={
        (props.active ? "raise-10" : "hover:raise-5")
        + " acc-focus flex flex-grow pl-1 py-1 rounded-sm items-center text-left text-sm overflow-hidden"}>
      <ToolIcon icon={props.icon}></ToolIcon>
      <div className="w-full pl-2 truncate">
        {props.children}
      </div>
    </button>
  );
}

export function ToolItem(props) {
  return (
    <div className="acc-focus flex w-full max-w-full mx-auto pl-1 py-1 space-x-2 rounded-sm items-center text-left text-sm overflow-hidden">
      <ToolIcon icon={props.icon}></ToolIcon>
      <span className="w-full truncate">
        {props.children}
      </span>
    </div>
  );
}

function ToolIcon(props) {
  return (
    <div className="px-2">
      <FabricIcon name={props.icon}></FabricIcon>
    </div>
  );
}