import React, { useRef, useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import Item from './item';
import ContextMenuDownload from './context-menu/context-menu-download';
import ContextMenuDelete from './context-menu/context-menu-delete';
import { ContextMenu } from './context-menu/context-menu';

export default function File({ file, indent }) {
  const itemRef = useRef(null);
  const { globalState, dispatch } = useGlobalStore();

  function activeFileDispatch() {
    dispatch({
      type: "setActiveFile",
      payload: {
        activeFile: file
      }
    });
  }

  return (
    <div>
      <Item
        itemRef={itemRef}
        onClick={activeFileDispatch}
        icon={globalState.fileIcons[file.metadata.type]}
        active={globalState?.activeFile?.uuid === file?.uuid}
				indent={indent}>
        {file?.metadata?.title}
      </Item>
      <ContextMenu itemRef={itemRef}>
        <ContextMenuDownload file={file}></ContextMenuDownload>
        <ContextMenuDelete file={file}></ContextMenuDelete>
      </ContextMenu>
    </div>
  );
}