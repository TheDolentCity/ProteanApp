import React from 'react';
import FabricIcon from './fabric-icon';

export default function Modal(props) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 raise-25"></div>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block w-1/2 p-4 align-middle rounded-lg text-left overflow-hidden shadow-xl transform transition-all bg-white dark:bg-black">
          <div className="flex w-full pb-4 text-right">
            <p className="flex-grow pb-4 pr-4 text-2xl text-left font-semibold">
              Protean Settings
            </p>
            <button onClick={props.onClose} className="acc-focus flex-none h-8 px-1 text-xl raise-10 hover:raise-25">
              <FabricIcon name="Cancel"></FabricIcon>
            </button>
          </div>
          <div className="flex flex-col">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}