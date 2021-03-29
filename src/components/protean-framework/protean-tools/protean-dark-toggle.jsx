import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { ProteanToolItem } from "./protean-tool";
import Toggle from "../../generic/basic-inputs/toggle";

export default function ProteanDarkToggle() {
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
    <ProteanToolItem icon={globalState.darkMode ? "IntermittentCloudsNight" : "Brightness"}>
      <Toggle
        label="Dark Mode"
        initialValue={globalState.darkMode}
        onChange={(toggleValue) => dispatch(darkModeDispatch(toggleValue))}>
      </Toggle>
    </ProteanToolItem>
  );
}