import React, { useState } from 'react';
import FabricIcon from '../generic/icons/fabric-icon';

export default function ProteanPanel(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? " " : "" + "flex flex-col whitespace-normal  " + props.openCss}>
      <button onClick={toggleOpen} className="acc-btn flex w-full mx-auto px-6 py-2 space-x-2 items-center text-base text-left elevation-10 hover:elevation-15">
        {isOpen ?
          <FabricIcon name="ChevronDownSmall" css="text-2xs pr-1"></FabricIcon>
          :
          <FabricIcon name="ChevronRightSmall" css="text-2xs pr-1"></FabricIcon>
        }
        <h6 className="flex-grow font-semibold truncate">
          {props.label}
        </h6>
      </button>
      {isOpen ?
        <div className="flex-grow w-full whitespace-normal overflow-y-auto">
          {props.children}
        </div>
        :
        <span></span>
      }
    </div>
  );
}