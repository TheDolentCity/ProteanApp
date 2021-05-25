import React from 'react';
import { useGlobalStore } from '../../../stores/global-store';
import { SmallItem } from '../item';

export default function ContextMenuNewBook({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const createBook = () => {
    dispatch({
      type: "newDocument",
      payload: {
				documentType: "BOOK",
        parentFile: file
      }
    });
  }

  return (
    <SmallItem
      onClick={createBook}
      icon="Add">
      New Book
    </SmallItem>
  );
}