import React from 'react';
import FabricIcon from "../../generic/icons/fabric-icon";

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

export function ProteanToolButton(props) {
  return (
    <button onClick={props.onClick} className="acc-btn flex w-full mx-auto px-4 py-1 space-x-3 items-center rounded text-lg hover:elevation-10">
      <FabricIcon name={props.icon}></FabricIcon>
      <span className="text-sm font-medium">{props.children}</span>
    </button>
  );
}