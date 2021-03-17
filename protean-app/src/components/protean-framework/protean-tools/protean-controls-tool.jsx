import React from 'react';
import ProteanTool, { ProteanToolButton } from "./protean-tool";
import { useGlobalStore } from "../../stores/global-store";
import ProteanDarkToggle from './protean-dark-toggle';

export default function ProteanControlsTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <ProteanTool toolName="Application Controls">
      <ProteanDarkToggle></ProteanDarkToggle>
      <ProteanToolButton icon="Settings">Settings</ProteanToolButton>
      <ProteanToolButton icon="View">Reading Mode</ProteanToolButton>
      <ProteanToolButton icon="EditCreate">Writing Mode</ProteanToolButton>
      <ProteanToolButton icon="Game">Playing Mode</ProteanToolButton>
    </ProteanTool>
  );
}