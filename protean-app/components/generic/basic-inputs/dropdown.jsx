import { useState } from 'react';

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full">
      <button onClick={toggleOpen} className={"h-full my-auto px-2 justify-center focus:outline-none " + props.css}>
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
    </div>
  );
}