import React, { useState } from 'react';
import CircleIcon from '../../generic/basic-inputs/circle-icon';
import DarkModeCommand from './dark-mode-command';
import SettingsCommand from './settings-command';
import UploadCommand from './upload-command';

export function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={(isOpen ? "w-48" : "") + " flex-none flex flex-col py-1 items-center border-r border-gray-500 dark:border-gray-600"}>
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
	switch (isOpen) {
		case true:
			return (
				<button onClick={onClick} className="w-full acc-focus flex px-3 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-5">
					<CircleIcon name={icon} size="sm" className="text-white dark:text-black bg-black dark:bg-white"></CircleIcon>
					<div className="w-full pl-2 truncate">
						{text}
					</div>
					{children}
				</button>
			);
		case false:
			return (
				<button onClick={onClick} className="acc-focus flex px-3 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-5">
					<CircleIcon name={icon} size="sm" className="text-white dark:text-black bg-black dark:bg-white"></CircleIcon>
					{children}
				</button>
			);
	}
}

// export function NewViewCommand() {
// 	const [isOpenModal, setIsOpenModal] = useState(false);

//   const toggleSettings = () => {
//     setIsOpenModal(!isOpenModal);
//   }

//   const closeModal = () => {
//     setIsOpenModal(false);
//   }

//   return (
//     <Command
//       onClick={newView}
//       icon="Settings" 
//       isOpen={isOpen} 
//       text="Settings">
//       <SettingsModal isOpen={isOpenModal} onClose={closeModal}></SettingsModal>
//     </Command>
//   );
// }