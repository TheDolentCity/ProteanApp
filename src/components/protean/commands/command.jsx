import React, { useState } from 'react';
import CircleIcon from '../../generic/basic-inputs/circle-icon';
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
    <div className={(isOpen ? "w-48 sm:py-2 md:py-7" : "sm:py-2 md:py-7") + " flex-none flex flex-col items-center"}>
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
	switch (isOpen) {
		case true:
			return (
				<button onClick={onClick} className="w-full acc-focus flex px-3 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-10">
					<CircleIcon name={icon} size="sm" className="text-white dark:text-black bg-black dark:bg-white"></CircleIcon>
					<div className="w-full pl-2 truncate">
						{text}
					</div>
					{children}
				</button>
			);
		case false:
			return (
				<button onClick={onClick} className="acc-focus flex px-3 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-10">
					<CircleIcon name={icon} size="sm" className="text-white dark:text-black bg-black dark:bg-white"></CircleIcon>
					{children}
				</button>
			);
	}
}