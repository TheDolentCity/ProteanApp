import React, { useState } from 'react';
import { Command } from './command';
import { Dialog } from "@headlessui/react";
import FabricIcon from './../../generic/basic-inputs/fabric-icon';
import { useRef } from 'react';

export default function SettingsCommand({ isOpen }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleSettings = () => {
    setIsOpenModal(!isOpenModal);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <Command 
      onClick={toggleSettings} 
      icon="Settings" 
      isOpen={isOpen} 
      text="Settings">
      <SettingsModal isOpen={isOpenModal} onClose={closeModal}></SettingsModal>
    </Command>
  );
}

function SettingsModal({ isOpen, onClose }) {
  const initialFocusRef = useRef();

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      initialFocus={initialFocusRef}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

      {/* This element is to trick the browser into centering the modal contents. */}
      <span
        className="inline-block h-screen align-middle"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div className="inline-block w-1/3 p-4 align-middle rounded-lg text-left overflow-hidden shadow-xl transform transition-all bg-white dark:bg-black">
            <div className="flex w-full pb-4 text-right">
              <Dialog.Title className="flex-grow pb-4 pr-4 text-2xl text-left font-semibold text-black dark:text-white">
                Settings
              </Dialog.Title>
              <button 
                onClick={onClose}
                ref={initialFocusRef}
                className="acc-focus flex-none h-8 px-1 text-xl raise-10 hover:raise-25">
                <FabricIcon name="Cancel"></FabricIcon>
              </button>
            </div>
            <div className="flex flex-col">
              <Dialog.Description className="pb-8">
                You can modify important application settings here. Currently the only major setting is to delete all of your local storage data.
              </Dialog.Description>
              <button onClick={clearLocalStorage} className="acc-focus p-2 rounded-md text-white bg-red-500 hover:bg-red-800">
                Clear Local Storage
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}