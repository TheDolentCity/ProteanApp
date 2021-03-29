import { useState } from 'react';

export default function Tabs(props) {
  const [currentTab, setCurrentTab] = useState("");
  const [tabs, setTabs] = useState([]);

  function closeTab(tabLabel) {
    
  }

  setTabs(props.tabs);

  return (
    <div className={"flex-1 flex flex-col whitespace-normal " + props.openCss}>

      <div className="flex-none flex w-full items-center border-b border-gray-400 bg-gray-200 dark:border-gray-700"> {
        tabs.map((tab, i) => (
          <div className="flex-1 flex h-6 my-auto items-center">
            <button onClick={setCurrentTab(tab.label)} className="flex-grow">
              <h6 className="truncate">
                {tab.label}
              </h6>
            </button>
            <button key={i} onClick={closeTab(tab.label)} className="acc-focus flex-none m-1 p-1 my-auto justify-center float-right hover:bg-black hover:bg-opacity-10 dark:hover:bg-white">
              <VscClose></VscClose>
            </button>
          </div>
        ))}
      </div>

      <div className="flex-grow w-full"> {
        tabs.map((tab, i) => {
          if (tab.label === currentTab) {
            return (
              <div key={i}>
                {tab.content}
              </div>
            );
          } 
          else {
            return null;
          }
        })}
      </div>
    </div>
  );
}