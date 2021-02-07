import { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc'

export default function DocumentTabs(props) {
  const [currentTab, SetCurrentTab] = useState("");
  const [documentTabs, setDocumentTabs] = useState([]);
  const testingDocumentTabs = [
    {
      label: "BOOK - Protean RPG",
      fileName: "protean-core.json",
    },
    {
      label: "SHEET - Carter Guyus",
      fileName: "carter-guyus.json",
    }
  ]

  function addDocument(document) {
    setDocumentTabs([...documentTabs, document]);
  }

  if (isOpen) {
    return (
      <div className={"flex-1 flex flex-col whitespace-normal " + props.openCss}>
        <div className="flex-none flex w-full h-8 my-auto items-center border-b border-gray-300 dark:border-gray-700">
          <button onClick={toggleOpen} className="flex-none p-2 my-auto justify-center float-right hover:bg-gray-200 focus:outline-none">
            <VscChevronDown></VscChevronDown>
          </button>
          <h6 className="flex-grow ml-2 truncate">
            {props.label}
          </h6>
        </div>
        <div className="flex-grow w-full p-6 whitespace-normal overflow-y-auto">
          {props.children}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={"flex-1 flex flex-col w-16 whitespace-normal " + props.closedCss}>
        <div className={"flex-none flex w-full h-8 my-auto align-top items-center border-b border-gray-300 dark:border-gray-700" + props.css}>
          <button onClick={toggleOpen} className="flex-none p-2 my-auto justify-center float-right hover:bg-gray-200 focus:outline-none">
            <VscChevronRight></VscChevronRight>
          </button>
          <h6 className="flex-grow ml-2 truncate">
            {props.label}
          </h6>
        </div>
        <div className="flex-grow w-full p-6 whitespace-normal overflow-y-auto">
          <div></div>
        </div>
      </div>
    );
  }
}

export function Document(props) {

}