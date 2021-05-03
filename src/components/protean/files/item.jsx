import React from 'react';
import FabricIcon from './../../generic/basic-inputs/fabric-icon';

export default function Item({ active, icon, onClick, children}) {
  if (onClick === null || onClick === undefined) {
    return (
      <BasicItem
        active={active}
        icon={icon}
        onClick={onClick}>
        {children}
      </BasicItem>
    );
  }
  else return (
    <button onClick={onClick} className="acc-focus w-full">
      <BasicItem
        active={active}
        icon={icon}
        onClick={onClick}>
        {children}
      </BasicItem>
    </button>
  );
}

function BasicItem({ active, icon, onClick, children}) {
  return (
    <div className={
      (active ? "bg-theme" : "hover:raise-5") +
      " acc-focus flex w-full py-1 rounded-sm items-center text-left text-sm overflow-hidden"}>
      <ItemIcon icon={icon}></ItemIcon>
      <div className="w-full truncate">
        {children}
      </div>
    </div>
  );
}

function ItemIcon({ icon }) {
  return (
    <div className="flex px-2 text-lg items-center">
      <FabricIcon name={icon}></FabricIcon>
    </div>
  );
}