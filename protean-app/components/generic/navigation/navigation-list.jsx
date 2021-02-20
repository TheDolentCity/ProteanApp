import { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

export function NavigationListSection(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen(!isOpen);
  };

  console.log("NavigationListSection:" + JSON.stringify(props.section));

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
        <h6 className="flex-grow truncate">
          {props.section?.title}
        </h6>
      </div>
      {isOpen ?
        <div className="flex-grow w-full whitespace-normal overflow-y-auto">
          <NavigationListSectionItems section={props.section} onClick={props.onItemClick}></NavigationListSectionItems>
        </div>
        :
        <div></div>
      }
    </div>
  );
}

function NavigationListSectionItems(props) {
  console.log("NavigationListSectionItems:" + JSON.stringify(props.section));
  switch (props.section.type) {
    case "BOOK":
      return (
        props.section.content.map(section => (
          <NavigationListSection key={section.uuid} section={section} onClick={props.onItemClick}></NavigationListSection>
        ))
      );
    case "SECTION":
      return (
        props.section.content.map(section => (
          <NavigationListSection key={section.uuid} section={section} onClick={props.onItemClick}></NavigationListSection>
        ))
      );
    case "PAGES":
      return (
        props.section.content.map(page => (
          <NavigationListItem key={page.uuid} onClick={props.onItemClick} >
            {page.title}
          </NavigationListItem>
        ))
      );
  }
  return (<div></div>);
}

function NavigationListItem(props) {
  return (
    <button onClick={props.onItemClick} className="flex-none h-6 my-auto px-2 hover:bg-protean-toolPanel-light-hoverBackground dark:hover:bg-protean-toolPanel-dark-hoverBackground focus:outline-none">
      <h6 className="pl-5 text-left truncate">
        {props.children}
      </h6>
    </button>
  );
}