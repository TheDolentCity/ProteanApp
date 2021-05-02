import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { Command } from './command';

export default function DarkModeCommand({ isOpen }) {
  const { globalState, dispatch } = useGlobalStore();

  const darkModeDispatch = () => {
    dispatch({
      type: "setDarkMode",
      payload: {
        darkMode: !globalState.darkMode
      }
    });
  }

  return (
    <Command
      onClick={darkModeDispatch}
      icon={globalState.darkMode ? "IntermittentCloudsNight" : "Brightness"}
      isOpen={isOpen}
      text="Dark Mode">
    </Command>
  );
}