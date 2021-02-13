import { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc'

export default function ProteanPanel(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? " " : " h-6 " + "flex flex-col whitespace-normal  " + props.openCss}>
      <div className="flex-none flex w-full h-6 my-auto items-center border-b border-gray-400 bg-gray-200 dark:border-gray-600 dark:bg-gray-800">
        <button onClick={toggleOpen} className="flex-none m-2 my-auto justify-center float-right hover:bg-black hover:bg-opacity-10 dark:hover:bg-white focus:outline-none">
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
      {isOpen ?
        <div className="flex-grow w-full p-6 whitespace-normal overflow-y-auto bg-gray-100 dark:bg-gray-900 border-b border-gray-400 dark:border-gray-600">
          {props.children}
        </div>
        :
        <span></span>
      }
    </div>
  );
}