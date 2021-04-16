import React from 'react';
import ProteanTool, { ProteanToolButton } from "./protean-tool";
import { useGlobalStore } from "../../stores/global-store";

export default function ProteanFilesTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  function setActiveFile(file) {
    dispatch({
      type: "setActiveFile",
      payload: {
        activeFile: file
      }
    });
  }

  return (
    <ProteanTool toolName="Files">
      {
        globalState.files.map((file, i) => (
          <ProteanToolButton
            key={i}
            icon={globalState.fileIcons[file?.metadata.type]}
            onClick={() => setActiveFile(file)}
            active={globalState?.activeFile?.uuid === file?.uuid}>
            {file?.metadata.title}
          </ProteanToolButton>
        ))
      }
    </ProteanTool>
  );
}