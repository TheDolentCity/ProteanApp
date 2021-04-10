import React from 'react';
import Modal from '../generic/basic-inputs/modal';
import { useGlobalStore } from '../stores/global-store';

export default function ProteanSettings(props) {
  const { globalState, dispatch } = useGlobalStore();

  function closeProteanSettings() {
    return {
      type: "setProteanSettingsState",
      payload: {
        state: false
      }
    }
  }

  if (globalState.conditionalRenders["ProteanSettingsModal"]) {
    return (
      <Modal onClose={() => dispatch(closeProteanSettings())}>
        <ClearLocalStorageButton></ClearLocalStorageButton>
      </Modal>
    );
  }
  else return <span className="hidden"></span>;
}

function ClearLocalStorageButton() {
  const clearLocalStorage = () => {
    localStorage.clear();
  }

  return (
    <button onClick={clearLocalStorage()} className="acc-focus p-2 rounded-md text-white bg-red-500 hover:bg-red-800">
      Clear Local Storage
    </button>
  );
}