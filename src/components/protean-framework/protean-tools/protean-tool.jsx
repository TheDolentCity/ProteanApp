import React from 'react';
import { Menu, Popover } from '@headlessui/react';
import FabricIcon from "../../generic/basic-inputs/fabric-icon";

export default function ProteanTool(props) {
  return (
    <div className="flex flex-col w-full mx-auto p-2 pb-4">
      <ProteanToolHeader>
        {props.toolName}
      </ProteanToolHeader>
      <ProteanToolBody>
        {props.children}
      </ProteanToolBody>
    </div>
  );
}

export function ProteanToolHeader(props) {
  return (
    <div className="flex-none w-full p-2 text-xs font-semibold uppercase truncate text-gray-500">
      {props.children}
    </div>
  );
}

export function ProteanToolBody(props) {
  return (
    <div className="flex-grow h-full overflow-y-auto">
      {props.children}
    </div>
  );
}

export function ProteanToolRow(props) {
  return (
    <div className="acc-focus flex w-full max-w-full mx-auto rounded text-left text-lg overflow-hidden">
      {props.children}
    </div>
  );
}

export function ProteanToolButton(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={
        (props.active ? "theme-color text-white font-semibold" : "hover:raise-10")
        + " acc-focus flex flex-grow px-4 py-1 items-center overflow-hidden"}>
      <FabricIcon name={props.icon} className=""></FabricIcon>
      <div className="pl-2 text-sm truncate">
        {props.children}
      </div>
    </button>
  );
}

export function ProteanToolItem(props) {
  return (
    <div className="acc-focus flex w-full max-w-full mx-auto px-4 py-1 space-x-3 items-center rounded text-lg overflow-hidden">
      <FabricIcon name={props.icon}></FabricIcon>
      <span className="text-sm truncate">
        {props.children}
      </span>
    </div>
  );
}

export function ProteanToolOptions(props) {
  return (
    <Popover className="relative">
      <Popover.Button className="acc-focus py-1 hover:raise-10">
        <FabricIcon name="MoreVertical"></FabricIcon>
      </Popover.Button>
      <Popover.Panel className="absolute z-10 bg-gray-500">
        {props.children}
      </Popover.Panel>
    </Popover>
  );
}