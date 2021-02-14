import { VscArrowDown, VscArrowUp, VscCloudDownload, VscCloudUpload, VscTerminal } from "react-icons/vsc";
import Dropdown from "../basic-inputs/dropdown";
import Elevation from "./elevation"

export default function ProteanAppHeader(props) {
  return (
    <div className="flex-none flex flex-nowrap h-8 px-2 my-auto items-center bg-protean-appBar-light dark:bg-protean-appBar-dark">
      <button className="flex-none h-full my-auto pr-2 justify-center focus:outline-none">
        <VscTerminal size="16"></VscTerminal>
      </button>
      <h4 className="flex-none ml-1 mr-4">
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
        <div className="flex flex-col flex-nowrap bg-protean-light dark:bg-protean-dark">
          <button className="flex-grow flex my-auto p-2 text-left items-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-gray-700 focus:outline-none">
            <VscCloudUpload size="20"></VscCloudUpload>
            <h6 className="pl-2">
              Upload Files
            </h6>
          </button>
          <button className="flex-grow flex my-auto p-2 text-left items-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-gray-700 focus:outline-none">
            <VscCloudDownload size="20"></VscCloudDownload>
            <h6 className="pl-2">
              Download Files
            </h6>
          </button>
        </div>
      </Elevation>
    </Dropdown>
  );
}

export function ProteanViewDropdown(props) {
  return (
    <button className="flex-none h-full my-auto px-2 justify-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-gray-700 focus:outline-none">
      <h6>
        View
      </h6>
    </button>
  );
}

export function ProteanDocumentDropdown(props) {
  return (
    <button className="flex-none h-full my-auto px-2 justify-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-gray-700 focus:outline-none">
      <h6>
        Document
      </h6>
    </button>
  );
}