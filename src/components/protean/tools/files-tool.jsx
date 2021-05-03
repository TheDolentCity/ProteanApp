import React from 'react';
import { Popover } from '@headlessui/react';
import { useGlobalStore } from "../../stores/global-store";
import FabricIcon from "../../generic/basic-inputs/fabric-icon";
import Tool, { ToolButton, ToolRow } from "./tool";

export default function FilesTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <Tool header="Files">
      {
        globalState?.files.map((file, i) => (
          <ToolRow key={i}>
            <FileButton file={file}></FileButton>
            <FileOptions>
              <FileDownloadButton file={file}></FileDownloadButton>
              <FileDeleteButton file={file}></FileDeleteButton>
            </FileOptions>
          </ToolRow>
        ))
      }
    </Tool>
  );
}

function FileButton({ file }) {
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
    <ToolButton
      icon={globalState.fileIcons[file?.metadata.type]}
      onClick={() => setActiveFile(file)}
      active={globalState?.activeFile?.uuid === file?.uuid}>
      {file?.metadata.title}
    </ToolButton>
  );
}

function FileOptions({ children }) {
  return (
    <Popover className="relative z-0">
      <Popover.Button className="acc-focus z-0 h-full hover:raise-10">
        <FabricIcon name="MoreVertical"></FabricIcon>
      </Popover.Button>
      <Popover.Panel className="fixed z-10 w-48 ml-6 -mt-8 py-2 rounded shadow-xl bg-white dark:bg-gray-700">
        {children}
      </Popover.Panel>
    </Popover>
  );
}

function FileDeleteButton({ file }) {
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
    <ToolRow>
      <ToolButton
        icon="Delete"
        onClick={() => deleteFile(file)}>
        Delete File
      </ToolButton>
    </ToolRow>
  );
}

function FileDownloadButton({ file }) {
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
    <ToolRow>
      <ToolButton
        icon="Download"
        onClick={downloadActiveFile}>
        Download File
      </ToolButton>
      <a
        className="hidden"
        href=""
        download={file.uuid}
        ref={fileOutputRef}>
        DOWNLOAD
      </a>
    </ToolRow>
  );
};