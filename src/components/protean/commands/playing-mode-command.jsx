import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { Command } from './command';

export default function PlayingModeCommand({ isOpen }) {
  const { globalState, dispatch } = useGlobalStore();

  const playingModeDispatch = () => {
    dispatch({
      type: "setMode",
      payload: {
        mode: "PlayingMode"
      }
    });
  }

  return (
    <Command
      onClick={playingModeDispatch}
      icon="Game"
      isOpen={isOpen}
      text="Playing Mode">
    </Command>
  );
}