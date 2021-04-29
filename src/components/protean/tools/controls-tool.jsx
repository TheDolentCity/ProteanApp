import React from 'react';
import Tool, { ToolButton, ToolRow } from "./tool";
import { useGlobalStore } from "../../stores/global-store";
import DarkTool from './dark-tool';
import FileUpload from './file-upload';

export default function ControlsTool(props) {

  return (
    <Tool header="Application Controls">
      <DarkTool></DarkTool>
      <SettingsLauncher></SettingsLauncher>
      <FileUpload></FileUpload>
    </Tool>
  );
}

function SettingsLauncher() {
  const { globalState, dispatch } = useGlobalStore();

  function launchSettings() {
    return {
      type: "setSettingsState",
      payload: {
        state: true
      }
    }
  }

  return (
    <ToolRow>
      <ToolButton
        icon="Settings"
        onClick={() => dispatch(launchSettings())}>
        Settings
      </ToolButton>
    </ToolRow>
  );
}