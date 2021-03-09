import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import FabricIcon from '../icons/fabric-icon';

export function FileExplorerSection(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full whitespace-normal overflow-x-hidden overflow-y-auto">
      <button onClick={toggleOpen} className="flex-none h-6 pl-2 my-auto items-center hover:bg-gray-250 dark:hover:bg-gray-750 focus:outline-none">
        <h6 className="flex truncate">
          {isOpen ?
            <FabricIcon name="ChevronDownSmall" css="text-3xs"></FabricIcon>
            :
            <FabricIcon name="ChevronRightSmall" css="text-3xs"></FabricIcon>
          }
          <FileExplorerIcon type={props.section.type} isOpen={isOpen}></FileExplorerIcon>
          {props.section.title}
        </h6>
      </button>
      {isOpen ?
        <div className="flex-grow w-full pl-3 whitespace-normal overflow-y-auto">
          <FileExplorerSectionItems section={props.section}></FileExplorerSectionItems>
        </div>
        :
        <div></div>
      }
    </div>
  );
}

function FileExplorerIcon(props) {
  switch (props.type) {
    case "BOOK":
      return (
        <FabricIcon name="BookAnswers" css="px-2 text-yellow-600 dark:text-yellow-400"></FabricIcon>
      );
    case "SECTION":
      if (props.isOpen) {
        return (
          <FabricIcon name="FabricOpenFolderHorizontal" css="px-2 text-gray-600 dark:text-gray-300"></FabricIcon>
        );
      }
      else {
        return (
          <FabricIcon name="FabricFolder" css="px-2 text-gray-600 dark:text-gray-300"></FabricIcon>
        );
      }
    case "PAGES":
      if (props.isOpen) {
        return (
          <FabricIcon name="FabricOpenFolderHorizontal" css="px-2 text-gray-600 dark:text-gray-300"></FabricIcon>
        );
      }
      else {
        return (
          <FabricIcon name="FabricFolder" css="px-2 text-gray-600 dark:text-gray-300"></FabricIcon>
        );
      }
    case "PAGE":
      return (
        <FabricIcon name="TextDocument" css="px-2 text-cyan-600 dark:text-cyan-300"></FabricIcon>
      );
  }

  // Default return
  return (<span></span>);
}

function FileExplorerSectionItems(props) {
  switch (props.section.type) {
    case "BOOK":
      return (
        props.section.content.map(section => (
          <FileExplorerSection key={section.uuid} section={section}></FileExplorerSection>
        ))
      );
    case "SECTION":
      return (
        props.section.content.map(section => (
          <FileExplorerSection key={section.uuid} section={section}></FileExplorerSection>
        ))
      );
    case "PAGES":
      return (
        props.section.content.map(page => (
          <FileExplorerItem key={page.uuid} item={page} ></FileExplorerItem>
        ))
      );
  }
  return (<div></div>);
}

function FileExplorerItem(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activeFileDispatch(file) {
    return {
      type: "addActiveFile",
      payload: {
        activeFile: file
      }
    }
  }

  return (
    <button onClick={() => dispatch(activeFileDispatch(props.item))} className="flex-none w-full h-6 my-auto px-2 rounded-none items-center whitespace-nowrap hover:bg-gray-250 dark:hover:bg-gray-750 focus:outline-none">
      <h6 className="flex h-4 pl-3 text-left truncate">
        <FileExplorerIcon type={props.item.type}></FileExplorerIcon>
        {props.item.title}
      </h6>
    </button>
  );
}