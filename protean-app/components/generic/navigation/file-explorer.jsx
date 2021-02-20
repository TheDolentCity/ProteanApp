import { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import { VscBook, VscChevronDown, VscChevronRight, VscFile, VscFolder, VscFolderOpened } from 'react-icons/vsc';
import FabricIcon from '../icons/fabric-icon';

export default function FileExplorer(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activePageDispatch(page) {
    return {
      type: "setActivePage",
      payload: {
        activePage: page
      }
    }
  }

  return (
    globalState.books.map(book => (
      <FileExplorerSection section={book} onItemClick={(page) => dispatch(activePageDispatch(page))}></FileExplorerSection>
    ))
  );
}

function FileExplorerSection(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? " " : " h-6 " + "flex flex-col w-full whitespace-normal overflow-y-auto"}>
      <div className="flex-none flex w-full h-6 my-auto items-center">
        <button onClick={toggleOpen} className="flex-none m-1 ml-2 my-auto justify-center float-right focus:outline-none">
          {isOpen ?
            <VscChevronDown></VscChevronDown>
            :
            <VscChevronRight></VscChevronRight>
          }
        </button>
        <FileExplorerIcon type={props.section.type} isOpen={isOpen}></FileExplorerIcon>
        <h6 className="flex-grow truncate">
          {props.section.title}
        </h6>
      </div>
      {isOpen ?
        <div className="flex-grow w-full pl-3 whitespace-normal overflow-y-auto">
          <FileExplorerSectionItems section={props.section} onClick={props.onItemClick}></FileExplorerSectionItems>
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
        <FabricIcon name="BookAnswers" css="px-2"></FabricIcon>
      );
    case "SECTION":
      if (props.isOpen) {
        return (
          <FabricIcon name="FabricOpenFolderHorizontal" css="px-2"></FabricIcon>
        );
      }
      else {
        return (
          <FabricIcon name="FabricFolder" css="px-2"></FabricIcon>
        );
      }
    case "PAGES":
      if (props.isOpen) {
        return (
          <FabricIcon name="FabricOpenFolderHorizontal" css="px-2"></FabricIcon>
        );
      }
      else {
        return (
          <FabricIcon name="FabricFolder" css="px-2"></FabricIcon>
        );
      }
    case "PAGE":
      return (
        <FabricIcon name="TextDocument" css="px-2"></FabricIcon>
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
          <FileExplorerSection key={section.uuid} section={section} onClick={props.onItemClick}></FileExplorerSection>
        ))
      );
    case "SECTION":
      return (
        props.section.content.map(section => (
          <FileExplorerSection key={section.uuid} section={section} onClick={props.onItemClick}></FileExplorerSection>
        ))
      );
    case "PAGES":
      return (
        props.section.content.map(page => (
          <FileExplorerItem key={page.uuid} item={page} onClick={props.onItemClick} ></FileExplorerItem>
        ))
      );
  }
  return (<div></div>);
}

function FileExplorerItem(props) {
  return (
    <button onClick={props.onItemClick} className="flex-none w-full h-6 my-auto px-2 items-center whitespace-nowrap hover:bg-protean-toolPanel-light-hoverBackground dark:hover:bg-protean-toolPanel-dark-hoverBackground focus:outline-none">
      <h6 className="flex h-4 pl-6 text-left truncate">
        <FileExplorerIcon type={props.item.type}></FileExplorerIcon>
        {props.item.title}
      </h6>
    </button>
  );
}