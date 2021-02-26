import React from 'react'
import Dropdown from "../generic/basic-inputs/dropdown";
import Elevation from "../generic/layout/elevation";
import FabricIcon from "../generic/icons/fabric-icon";

export default function ProteanAppHeader(props) {
  return (
    <div className="flex-none flex flex-nowrap h-8 px-2 my-auto items-center bg-protean-appBar-light dark:bg-protean-appBar-dark">
      <button className="flex-none flex h-full my-auto pr-2 items-center focus:outline-none">
        <h5 className="flex items-center font-semibold">
          <FabricIcon name="Code" css="pr-1"></FabricIcon>
          {props.children}
        </h5>
      </button>
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
            <FabricIcon name="Upload"></FabricIcon>
            <h6 className="pl-2">
              Upload Files
            </h6>
          </button>
          <button className="flex-grow flex my-auto p-2 text-left items-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-gray-700 focus:outline-none">
            <FabricIcon name="Download"></FabricIcon>
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