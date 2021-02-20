import React, { useState } from 'react';
import { VscChevronDown, VscChevronRight, VscClose } from 'react-icons/vsc'

export default function ProteanDocumentViewer(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [documents, setDocuments] = useState([]);
  const testingDocumentTabs = 
  [
    {
      label: "Protean RPG",
      type: "BOOK",
      document: "",
    },
    {
      label: "Carter Guyus",
      type: "SHEET",
      document: 
      {
        "name": "Carter Guyus",
        "description": "This is an example of a character description.",
        "actionBlocks": 
        [
          {
            "header": "Strength",
            "body": "The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?",
            "dice": {
              "count": 1,
              "size": 4
            }
          },
          {
            "header": "Dexterity",
            "body": "The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?",
            "dice": {
              "count": 3,
              "size": 8
            }
          },
          {
            "header": "Wisdom",
            "body": "The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?",
            "dice": {
              "count": 5,
              "size": 12
            }
          }
        ]
      },
    },
  ]

  // Toggle currently active tab
  function handleTabClick(tabIndex) {
    setActiveTab(tabIndex);
  }
  handleTabClick = handleTabClick.bind(this);

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  function renderChildrenWithTabsApiAsProps() {
    return React.Children.map(props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: handleTabClick,
        tabIndex: index,
        isActive: index === activeTab
      });
    });
  }

  // Render current active tab content
  function renderActiveTabContent() {
    const { children } = props;
    if (children[activeTab]) {
      return children[activeTab].props.children;
    }
  }

  // Render Document Viewer component
  return (
    <div className="flex flex-col w-full h-full">
      <ul className="flex-none flex">
        {renderChildrenWithTabsApiAsProps()}
      </ul>
      <div className="flex-grow w-full whitespace-normal overflow-y-auto">
        {renderActiveTabContent()}
      </div>
    </div>
  );
}

export function ProteanDocumentTab(props) {
  return (
    <li className={`flex-1 flex h-8 my-auto items-center ${props.isActive ? 'bg-protean-light dark:bg-protean-dark' : 'bg-protean-tab-light dark:bg-protean-tab-dark'} `}>
      <button className={`w-full h-full ${props.isActive ? 'active' : ''} focus:outline-none`}
        onClick={(event) => {
          event.preventDefault();
          props.onClick(props.tabIndex);
        }}>
        <h6 className="mx-2 float-left truncate">
          {props.label}
        </h6>
      </button>
      <button className="flex-none m-2 my-auto justify-center float-right focus:outline-none">
        <VscClose></VscClose>
      </button>
    </li>
  )
}

export function ProteanDocument(props) {

}