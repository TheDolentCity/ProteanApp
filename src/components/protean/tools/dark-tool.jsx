import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import Toggle from "../../generic/basic-inputs/toggle";
import { ToolItem } from "./tool";

export default function DarkTool() {
  const { globalState, dispatch } = useGlobalStore();

  function darkModeDispatch(darkValue) {
    return {
      type: "setDarkMode",
      payload: {
        darkMode: darkValue
      }
    }
  }

  return (
    <ToolItem icon={globalState.darkMode ? "IntermittentCloudsNight" : "Brightness"}>
      <Toggle
        label="Dark Mode"
        initialValue={globalState.darkMode}
        onChange={(toggleValue) => dispatch(darkModeDispatch(toggleValue))}>
      </Toggle>
    </ToolItem>
  );
}