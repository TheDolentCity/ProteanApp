import React, { useRef, useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import Item from './item';
import { useEffect } from 'react';
import ContextMenuDownload from './context-menu-download';
import ContextMenuDelete from './context-menu-delete';

export default function File({ file }) {
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
        active={globalState?.activeFile?.uuid === file?.uuid}>
        {file?.metadata?.title}
      </Item>
      <FileContextMenu itemRef={itemRef} file={file}></FileContextMenu>
    </div>
  );
}

export function FileContextMenu({ itemRef, file }) {
  const [isOpen, setIsOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const file = itemRef.current;
    if (!file) {
      return;
    }

    const showMenu = (event) => {
      event.preventDefault();
      setIsOpen(true);
      setX(event.clientX);
      setY(event.clientY);
    }

    const closeMenu = () => {
      setIsOpen(false);
    }

    file.addEventListener('contextmenu', showMenu);
    window.addEventListener('click', closeMenu);

    return function cleanup() {
      file.removeEventListener('contextmenu', showMenu);
      window.removeEventListener('click', closeMenu);
    }
  });

  const style = {
    top: y,
    left: x
  }

  if (isOpen) {
    return (
      <div className="fixed flex flex-col p-2 rounded shadow-xl bg-white dark:bg-gray-700" style={style}>
        <ContextMenuDownload file={file}></ContextMenuDownload>
        <ContextMenuDelete file={file}></ContextMenuDelete>
      </div>
    );
  }
  else return null;
}