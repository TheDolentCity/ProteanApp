import React, { useState } from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import ModeSwitcher from '../app-modes/mode-switcher';
import DarkModeCommand from './dark-mode-command';
import SettingsCommand from './settings-command';
import UploadCommand from './upload-command';

export function CommandBar({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={(isOpen ? "w-48 sm:py-2 md:py-7" : "sm:py-2 md:py-7") + " flex-none flex flex-col items-center bg-white dark:bg-black"}>
      <Command 
        onClick={toggleOpen} 
        isOpen={isOpen}
        icon="CollapseMenu" 
        text="Collapse">
      </Command>
      <SettingsCommand isOpen={isOpen}></SettingsCommand>
			<ModeSwitcher isOpen={isOpen}></ModeSwitcher>
      <DarkModeCommand isOpen={isOpen}></DarkModeCommand>
      <UploadCommand isOpen={isOpen}></UploadCommand>
    </div>
  );
}

export function Command({ onClick, isOpen, icon, text, children }) {
  return (
    <button onClick={onClick} className={(isOpen ? "w-full" : "") + " acc-focus flex px-4 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-10"}>
      <FabricIcon name={icon} className="text-theme"></FabricIcon>
      {
        isOpen ?
        <div className="w-full pl-2 truncate">
          {text}
        </div>
        :
        <span></span>
      }
      {children}
    </button>
  );
}