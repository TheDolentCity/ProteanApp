import React from 'react';
import { useGlobalStore } from '../../stores/global-store';
import Item from './item';

export default function ContextMenuDelete({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const deleteFile = () => {
    dispatch({
      type: "deleteFile",
      payload: {
        deleteFile: file
      }
    });
  }

  return (
    <Item
      onClick={deleteFile}
      icon="ChromeClose">
      Delete File
    </Item>
  );
}