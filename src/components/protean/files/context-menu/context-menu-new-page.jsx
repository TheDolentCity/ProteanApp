import React from 'react';
import { useGlobalStore } from '../../../stores/global-store';
import { SmallItem } from '../item';

export default function ContextMenuNewPage({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const createPage = () => {
    dispatch({
      type: "newDocument",
      payload: {
				documentType: "PAGE",
        parentFile: file
      }
    });
  }

  return (
    <SmallItem
      onClick={createPage}
      icon="Add">
      New Page
    </SmallItem>
  );
}