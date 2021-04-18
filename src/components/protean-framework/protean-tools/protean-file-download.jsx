import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { ProteanToolButton, ProteanToolRow } from './protean-tool';

export default function ProteanFileDownload() {
  const { globalState, dispatch } = useGlobalStore();
  const fileOutputRef = React.useRef(null);

  function downloadActiveFile(event) {
    event.preventDefault();

    if (globalState.activeFile !== null) {
      const blob = new Blob([JSON.stringify(globalState?.activeFile)], { type: 'text/json;charset=utf-8' });
      const fileDownloadUrl = URL.createObjectURL(blob);
      fileOutputRef.current?.setAttribute("href", fileDownloadUrl);
      fileOutputRef.current?.click();
    }
  }

  return (
    <ProteanToolRow>
      <ProteanToolButton
        icon="Download"
        onClick={downloadActiveFile}>
        Download
      </ProteanToolButton>
      <a
        className="hidden"
        href=""
        download={globalState?.activeFile.uuid}
        ref={fileOutputRef}>
        DOWNLOAD
      </a>
    </ProteanToolRow>
  );
};