import React from 'react';
import ProteanTool, { ProteanToolButton, ProteanToolRow } from "./protean-tool";
import { useGlobalStore } from "../../stores/global-store";
import ProteanDarkToggle from './protean-dark-toggle';
import ProteanFileUpload from './protean-file-upload';
import ProteanFileDownload from './protean-file-download';

export default function ProteanControlsTool(props) {

  return (
    <ProteanTool toolName="Application Controls">
      <ProteanDarkToggle></ProteanDarkToggle>
      <ProteanSettingsLauncher></ProteanSettingsLauncher>
      <ProteanFileUpload></ProteanFileUpload>
      {/* <ProteanToolButton icon="View">Reading Mode</ProteanToolButton>
      <ProteanToolButton icon="EditCreate">Writing Mode</ProteanToolButton>
      <ProteanToolButton icon="Game">Playing Mode</ProteanToolButton> */}
    </ProteanTool>
  );
}

function ProteanSettingsLauncher() {
  const { globalState, dispatch } = useGlobalStore();

  function launchProteanSettings() {
    return {
      type: "setProteanSettingsState",
      payload: {
        state: true
      }
    }
  }

  return (
    <ProteanToolRow>
      <ProteanToolButton
        icon="Settings"
        onClick={() => dispatch(launchProteanSettings())}>
        Settings
      </ProteanToolButton>
    </ProteanToolRow>
  );
}