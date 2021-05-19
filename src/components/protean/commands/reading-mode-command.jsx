import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { Command } from './command';

export default function ReadingModeCommand({ isOpen }) {
  const { globalState, dispatch } = useGlobalStore();

  const readingModeDispatch = () => {
    dispatch({
      type: "setMode",
      payload: {
        mode: "ReadingMode"
      }
    });
  }

  return (
    <Command
      onClick={readingModeDispatch}
      icon="View"
      isOpen={isOpen}
      text="Reading Mode">
    </Command>
  );
}