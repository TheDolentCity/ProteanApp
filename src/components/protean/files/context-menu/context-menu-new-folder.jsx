import React from 'react';
import { useGlobalStore } from '../../../stores/global-store';
import { SmallItem } from '../item';

export default function ContextMenuNewFolder({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const createFolder = () => {
    dispatch({
      type: "newDocument",
      payload: {
				documentType: "FOLDER",
        parentFile: file
      }
    });
  }

  return (
    <SmallItem
      onClick={createFolder}
      icon="Add">
      New Folder
    </SmallItem>
  );
}