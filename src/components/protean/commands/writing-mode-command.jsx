import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { Command } from './command';

export default function WritingModeCommand({ isOpen }) {
  const { globalState, dispatch } = useGlobalStore();

  const writingModeDispatch = () => {
    dispatch({
      type: "setMode",
      payload: {
        mode: "WritingMode"
      }
    });
  }

  return (
    <Command
      onClick={writingModeDispatch}
      icon="Edit"
      isOpen={isOpen}
      text="Writing Mode">
    </Command>
  );
}