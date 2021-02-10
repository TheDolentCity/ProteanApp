import { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc'

export default function ProteanPanel(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"flex-1 flex flex-col whitespace-normal " + props.openCss}>
      <div className="flex-none flex w-full h-6 my-auto items-center border-b border-gray-400 bg-gray-200 dark:border-gray-800">
        <button onClick={toggleOpen} className="flex-none m-2 my-auto justify-center float-right hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none">
          {isOpen ?
            <VscChevronDown></VscChevronDown>
            :
            <VscChevronRight></VscChevronRight>
          }
        </button>
        <h6 className="flex-grow truncate">
          {props.label}
        </h6>
      </div>
      <div className="flex-grow w-full p-6 whitespace-normal overflow-y-auto">
      {isOpen ?
        props.children
        :
        <div></div>
      }
      </div>
    </div>
  );
}