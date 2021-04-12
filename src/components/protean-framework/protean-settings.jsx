import React from 'react';
import Modal from '../generic/basic-inputs/modal';
import { useGlobalStore } from '../stores/global-store';

export default function ProteanSettings(props) {
  const { globalState, dispatch } = useGlobalStore();

  const closeSettings = () => {
    dispatch({
      type: "setProteanSettingsState",
      payload: {
        state: false
      }
    });
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    closeSettings();
  }

  if (globalState?.conditionalRenders["ProteanSettingsModal"]) {
    return (
      <Modal onClose={closeSettings}>
        <button onClick={clearLocalStorage} className="acc-focus p-2 rounded-md text-white bg-red-500 hover:bg-red-800">
          Clear Local Storage
        </button>
      </Modal>
    );
  }
  else return <span className="hidden"></span>;
}