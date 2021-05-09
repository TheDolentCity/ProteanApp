import React from 'react';
import { useGlobalStore } from '../../../stores/global-store';
import { SmallItem } from '../item';

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
    <SmallItem
      onClick={deleteFile}
      icon="Cancel">
      Delete File
    </SmallItem>
  );
}