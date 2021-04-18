import React from 'react';
import { Popover } from '@headlessui/react';
import { useGlobalStore } from "../../stores/global-store";
import FabricIcon from "../../generic/basic-inputs/fabric-icon";
import ProteanTool, { ProteanToolButton, ProteanToolRow } from "./protean-tool";

export default function ProteanFilesTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <ProteanTool toolName="Files">
      {
        globalState?.files.map((file, i) => (
          <ProteanToolRow key={i}>
            <ProteanFile file={file}></ProteanFile>
            <ProteanFileOptions>
              <ProteanFileDelete file={file}></ProteanFileDelete>
              <ProteanFileDownload file={file}></ProteanFileDownload>
            </ProteanFileOptions>
          </ProteanToolRow>
        ))
      }
    </ProteanTool>
  );
}

function ProteanFile({ file }) {
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
    <ProteanToolButton
      icon={globalState.fileIcons[file?.metadata.type]}
      onClick={() => setActiveFile(file)}
      active={globalState?.activeFile?.uuid === file?.uuid}>
      {file?.metadata.title}
    </ProteanToolButton>
  );
}

function ProteanFileOptions({ children }) {
  return (
    <Popover className="relative z-0">
      <Popover.Button className="acc-focus z-0 py-1 hover:raise-10">
        <FabricIcon name="MoreVertical"></FabricIcon>
      </Popover.Button>
      <Popover.Panel className="fixed z-10 w-48 ml-10 -mt-9 py-2 rounded glass-10 shadow-md">
        {children}
      </Popover.Panel>
    </Popover>
  );
}

function ProteanFileDelete({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  function deleteFile(file) {
    dispatch({
      type: "deleteFile",
      payload: {
        deleteFile: file
      }
    });
  }

  return (
    <ProteanToolRow>
      <ProteanToolButton
        icon="Delete"
        onClick={() => deleteFile(file)}>
        Delete File
      </ProteanToolButton>
    </ProteanToolRow>
  );
}

function ProteanFileDownload({ file }) {
  const fileOutputRef = React.useRef(null);

  function downloadActiveFile(event) {
    event.preventDefault();

    if (file !== null) {
      const blob = new Blob([JSON.stringify(file)], { type: 'text/json;charset=utf-8' });
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
        Download File
      </ProteanToolButton>
      <a
        className="hidden"
        href=""
        download={file.uuid}
        ref={fileOutputRef}>
        DOWNLOAD
      </a>
    </ProteanToolRow>
  );
};