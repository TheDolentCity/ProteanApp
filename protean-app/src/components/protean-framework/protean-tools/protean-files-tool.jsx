import React from 'react';
import ProteanTool, { ProteanToolButton } from "./protean-tool";
import { useGlobalStore } from "../../stores/global-store";

export default function ProteanFilesTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  function getIconFromFileType(file) {
    switch (file.type) {
      case "BOOK": return "ReadingMode";
      case "PAGE": return "TextDocument";
      case "SHEET": return "TextDocumentShared";
    }
  }

  function activeFileDispatch(file) {
    return {
      type: "setActiveFile",
      payload: {
        activeFile: file
      }
    }
  }

  return (
    <ProteanTool toolName="Files">
      {
        globalState.files.map(file => (
          <ProteanToolButton 
            key={file.uuid}
            icon={() => getIconFromFileType(file.type)}
            onClick={() => dispatch(activeFileDispatch(file))}>
            {file.title}
          </ProteanToolButton>
        ))
      }
    </ProteanTool>
  );
}