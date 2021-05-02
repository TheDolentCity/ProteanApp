import React, { useState } from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import DarkModeCommand from './dark-mode-command';
import SettingsCommand from './settings-command';
import UploadCommand from './upload-command';

export function CommandBar({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={(isOpen ? "w-40 px-2 sm:py-2 md:py-6" : "px-2 sm:py-2 md:py-6") + " flex-none flex flex-col items-center theme-color"}>
      <Command 
        onClick={toggleOpen} 
        isOpen={isOpen}
        icon="CollapseMenu" 
        text="Collapse">
      </Command>
      <SettingsCommand isOpen={isOpen}></SettingsCommand>
      <DarkModeCommand isOpen={isOpen}></DarkModeCommand>
      <UploadCommand isOpen={isOpen}></UploadCommand>
    </div>
  );
}

export function Command({ onClick, isOpen, icon, text, children }) {
  return (
    <button onClick={onClick} className={(isOpen ? "w-full" : "") + " acc-focus flex px-3 py-2 rounded-sm items-center text-left text-lg overflow-hidden hover:raise-10"}>
      <FabricIcon name={icon}></FabricIcon>
      {
        isOpen ?
        <div className="w-full pl-2 truncate text-sm">
          {text}
        </div>
        :
        <span></span>
      }
      {children}
    </button>
  );
}