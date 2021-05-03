import React from 'react';
import { useGlobalStore } from '../../stores/global-store';
import Item from './item';

export default function File({ file }) {
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
    <Item
      onClick={activeFileDispatch}
      icon={globalState.fileIcons[file.metadata.type]}
      active={globalState?.activeFile?.uuid === file?.uuid}>
      {file?.metadata?.title}
    </Item>
  );
}