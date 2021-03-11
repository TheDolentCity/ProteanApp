import React, { useState } from 'react';
import OutsideClick from './outside-click';

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="h-full">
      <OutsideClick onClick={closeDropdown}>
        <button onClick={toggleOpen} className={"acc-btn h-full my-auto px-2 justify-center " + props.css}>
          <h6 className="">
            {props.label}
          </h6>
        </button>
        {isOpen ?
            <div className="absolute whitespace-nowrap overflow-hidden shadow-md">
              <div className="w-full h-full">
                {props.children}
              </div>
            </div>
          :
          <div></div>
        }
      </OutsideClick>
    </div>
  );
}