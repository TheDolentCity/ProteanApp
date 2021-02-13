import { VscArrowDown, VscArrowUp, VscTerminal } from "react-icons/vsc";
import Dropdown from "../basic-inputs/dropdown";
import Elevation from "./elevation"

export default function ProteanAppHeader(props) {
  return (
    <div className="flex-none flex flex-nowrap h-8 px-2 my-auto items-center bg-gray-200 dark:bg-gray-900">
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-black hover:bg-opacity-10  dark:hover:bg-white focus:outline-none">
        <VscTerminal size="16"></VscTerminal>
      </button>
      <h4 className="flex-none ml-2 mr-6">
        {props.children}
      </h4>
      <ProteanFileDropdown></ProteanFileDropdown>
      <ProteanViewDropdown></ProteanViewDropdown>
      <ProteanDocumentDropdown></ProteanDocumentDropdown>
    </div>
  );
}

export function ProteanFileDropdown(props) {
  return (
    <Dropdown label="File">
      <Elevation>
        <div className="flex flex-col flex-nowrap bg-gray-200">
          <button className="flex-grow flex my-auto p-2 text-left hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none">
            <VscArrowUp size="20"></VscArrowUp>
            <h5 className="pl-2">
              Upload File
            </h5>
          </button>
          <button className="flex-grow flex my-auto p-2 text-left hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none">
            <VscArrowDown size="20"></VscArrowDown>
            <h5>
              Download Files
            </h5>
          </button>
        </div>
      </Elevation>
    </Dropdown>
  );
}

export function ProteanViewDropdown(props) {
  return (
    <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none">
      <h5>
        View
      </h5>
    </button>
  );
}

export function ProteanDocumentDropdown(props) {
  return (
    <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none">
      <h5>
        Document
      </h5>
    </button>
  );
}