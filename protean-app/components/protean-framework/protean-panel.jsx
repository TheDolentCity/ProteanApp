import { useState } from 'react';
import FabricIcon from '../generic/icons/fabric-icon';

export default function ProteanPanel(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? " " : " h-6 " + "flex flex-col whitespace-normal  " + props.openCss}>
      <div className="flex-none flex w-full h-6 my-auto items-center bg-protean-panel-light text-protean-panel-dark dark:bg-protean-panel-dark dark:text-protean-panel-light">
        <button onClick={toggleOpen} className="flex-none m-1 ml-2 my-auto justify-center float-right focus:outline-none">
          {isOpen ?
            <FabricIcon name="ChevronDownSmall" css="text-2xs pr-1"></FabricIcon>
            :
            <FabricIcon name="ChevronRightSmall" css="text-2xs pr-1"></FabricIcon>
          }
        </button>
        <h6 className="flex-grow font-semibold uppercase truncate">
          {props.label}
        </h6>
      </div>
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