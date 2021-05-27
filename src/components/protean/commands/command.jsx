import React, { useState } from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import DarkModeCommand from './dark-mode-command';
import PlayingModeCommand from './playing-mode-command';
import ReadingModeCommand from './reading-mode-command';
import SettingsCommand from './settings-command';
import UploadCommand from './upload-command';
import WritingModeCommand from './writing-mode-command';

export function CommandBar({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={(isOpen ? "w-48 sm:py-2 md:py-6" : "sm:py-2 md:py-6") + " flex-none flex flex-col items-center bg-gray-300 dark:bg-black"}>
      <Command 
        onClick={toggleOpen} 
        isOpen={isOpen}
        icon="CollapseMenu" 
        text="Collapse">
      </Command>
      <SettingsCommand isOpen={isOpen}></SettingsCommand>
			<WritingModeCommand isOpen={isOpen}></WritingModeCommand>
			<ReadingModeCommand isOpen={isOpen}></ReadingModeCommand>
			<PlayingModeCommand isOpen={isOpen}></PlayingModeCommand>
      <DarkModeCommand isOpen={isOpen}></DarkModeCommand>
      <UploadCommand isOpen={isOpen}></UploadCommand>
    </div>
  );
}

export function Command({ onClick, isOpen, icon, text, children }) {
  return (
    <button onClick={onClick} className={(isOpen ? "w-full" : "") + " acc-focus flex px-4 py-2 items-center rounded-none text-left text-lg overflow-hidden hover:raise-10"}>
      <FabricIcon name={icon} className="text-theme"></FabricIcon>
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