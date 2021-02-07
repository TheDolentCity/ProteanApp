import { useState } from 'react';
import Surface, { SurfaceSection } from '../layout/surface';

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full">
      <button onClick={toggleOpen} className={"h-full my-auto px-2 justify-center hover:bg-gray-300 focus:outline-none " + props.css}>
        <h5 className="">
          {props.label}
        </h5>
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
    </div>
  );
}