import React, { useState } from 'react';
import FabricIcon from '../generic/icons/fabric-icon';

export default function ProteanDocumentViewer(props) {
  const [activeTab, setActiveTab] = useState(0);
  
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

    // Check if there is only one tab
    if (Array.isArray(children) == false) {
      return children.props.children;
    }

    // Determine active tab when there are multiple
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
      <div className="flex-grow w-full h-full whitespace-normal">
        {renderActiveTabContent()}
      </div>
    </div>
  );
}

export function ProteanDocumentTab(props) {
  return (
    <li className={`flex-1 flex h-8 my-auto items-center ${props.isActive ? '' : 'bg-gray-200 dark:bg-gray-800'} `}>
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
        <FabricIcon name="Cancel"></FabricIcon>
      </button>
    </li>
  )
}