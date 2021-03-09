import React from 'react';
import Dropdown from "../generic/basic-inputs/dropdown";
import Elevation from "../generic/layout/elevation";
import FabricIcon from "../generic/icons/fabric-icon";

export default function ProteanAppHeader(props) {
  return (
    <div className="flex-none flex flex-nowrap h-8 px-2 my-auto items-center bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-20">
      <button className="flex-none flex h-full my-auto pr-2 items-center focus:outline-none">
        <h5 className="flex items-center font-semibold">
          <FabricIcon name="Code" css="pr-1"></FabricIcon>
          {props.children}
        </h5>
      </button>

      <ProteanHeaderDropdown label="File">
        <ProteanDropdownButton icon="Upload">
          Upload Files
        </ProteanDropdownButton>
        <ProteanDropdownButton icon="Download">
          Download Files
        </ProteanDropdownButton>
      </ProteanHeaderDropdown>

      <ProteanHeaderDropdown label="View">
        <ProteanDropdownButton icon="Edit">
          Writing View
        </ProteanDropdownButton>
        <ProteanDropdownButton icon="ReadingMode">
          Reading View
        </ProteanDropdownButton>
        <ProteanDropdownButton icon="Game">
          Playing View
        </ProteanDropdownButton>
      </ProteanHeaderDropdown>

      <ProteanHeaderDropdown label="Document">
        <ProteanDropdownButton icon="Upload">
          Upload Files
        </ProteanDropdownButton>
        <ProteanDropdownButton icon="Download">
          Download Files
        </ProteanDropdownButton>
      </ProteanHeaderDropdown>
    </div>
  );
}

function ProteanHeaderDropdown(props) {
  return (
    <Dropdown label={props.label} css="hover:bg-gray-350 dark:hover:bg-gray-650">
      <Elevation css="">
        <div className="flex flex-col flex-nowrap min-w-60 bg-gray-100 dark:bg-gray-1000">
          {props.children}
        </div>
      </Elevation>
    </Dropdown>
  );
}

function ProteanDropdownButton(props) {
  return (
    <button className="flex-grow flex w-full my-auto px-4 py-2 text-left items-center hover:bg-gray-350 dark:hover:bg-gray-750 focus:outline-none">
      <FabricIcon name={props.icon}></FabricIcon>
      <h6 className="pl-2">
        {props.children}
      </h6>
    </button>
  );
}