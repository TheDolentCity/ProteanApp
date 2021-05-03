import React from 'react';
import FabricIcon from './../../generic/basic-inputs/fabric-icon';

export default function Item({ itemRef, active, icon, onClick, children}) {
  if (onClick === null || onClick === undefined) {
    return (
      <BasicItem
        ref={itemRef}
        active={active}
        icon={icon}>
        {children}
      </BasicItem>
    );
  }
  else return (
    <button 
      ref={itemRef} 
      onClick={onClick} 
      className="acc-focus w-full">
      <BasicItem
        active={active}
        icon={icon}>
        {children}
      </BasicItem>
    </button>
  );
}

function BasicItem({ active, icon, children}) {
  return (
    <div className={
      (active ? "bg-theme" : "hover:raise-5") +
      " acc-focus flex w-full px-2 py-1 rounded-sm items-center text-left text-sm overflow-hidden"}>
      <ItemIcon icon={icon}></ItemIcon>
      <div className="w-full truncate">
        {children}
      </div>
    </div>
  );
}

function ItemIcon({ icon }) {
  return (
    <div className="flex pr-2 text-lg items-center">
      <FabricIcon name={icon}></FabricIcon>
    </div>
  );
}