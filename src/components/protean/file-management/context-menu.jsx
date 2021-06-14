import React, { useEffect, useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import Item from './item';

export function ContextMenu({ itemRef, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const ref = itemRef.current;
    if (!ref) {
      return;
    }

    const showMenu = (event) => {
      event.preventDefault();
      setIsOpen(true);
      setX(event.clientX);
      setY(event.clientY);
    }

    const closeMenu = (event) => {
      if (event.target != ref) {
        setIsOpen(false);
      }
    }

    ref.addEventListener('contextmenu', showMenu);
    window.addEventListener('click', closeMenu);

    return function cleanup() {
      ref.removeEventListener('contextmenu', showMenu);
      window.removeEventListener('click', closeMenu);
    }
  });

  const style = {
    top: y,
    left: x
  }

  if (isOpen) {
    return (
      <div className="fixed flex flex-none flex-col min-w-48 -mx-4 shadow-xl bg-white divide-y divide-gray-300 dark:bg-gray-700 dark:divide-gray-600" style={style}>
        {children}
      </div>
    );
  }
  else return null;
}

export function ContextMenuSection({ children }) {
	return (
		<div className="w-full py-1">
			{children}
		</div>
	);
}

export function ContextMenuDelete({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const deleteFile = () => {
    dispatch({
      type: "deleteFile",
      payload: {
        file: file
      }
    });
  }

  return (
    <Item
      onClick={deleteFile}
      icon="Cancel">
      Delete
    </Item>
  );
}

export function ContextMenuDownload({ file }) {
  const fileOutputRef = React.useRef(null);

  function downloadFile(event) {
    event.preventDefault();

    if (file !== null) {
      const blob = new Blob([JSON.stringify(file)], { type: 'text/json;charset=utf-8' });
      const fileDownloadUrl = URL.createObjectURL(blob);
      fileOutputRef.current?.setAttribute("href", fileDownloadUrl);
      fileOutputRef.current?.click();
			URL.revokeObjectURL(fileDownloadUrl);
    }
  }

	function getFileName(file) {
		if (file?.metadata?.title === null || file?.metadata?.title === "") {
			return "untitled.json";
		}
		else {
			var name = file?.metadata?.title;
			name = name.split(' ').join();
			name += ".json";
			return name;
		}
	}

  return (
    <div className="w-full">
      <Item
        onClick={downloadFile}
        icon="Download">
        Download
      </Item>
      <a
        className="hidden"
        href=""
        download={getFileName(file)}
        ref={fileOutputRef}>
        DOWNLOAD
      </a>
    </div>
  );
}

export function ContextMenuNewBook({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const createBook = () => {
    dispatch({
      type: "newFile",
      payload: {
				documentType: "BOOK",
        parentFile: file
      }
    });
  }

  return (
    <Item
      onClick={createBook}
      icon="Add">
      New Book
    </Item>
  );
}

export function ContextMenuNewFolder({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const createFolder = () => {
    dispatch({
      type: "newFile",
      payload: {
				documentType: "FOLDER",
        parentFile: file
      }
    });
  }

  return (
    <Item
      onClick={createFolder}
      icon="Add">
      New Folder
    </Item>
  );
}

export function ContextMenuNewPage({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const createPage = () => {
    dispatch({
      type: "newFile",
      payload: {
				documentType: "PAGE",
        parentFile: file
      }
    });
  }

  return (
    <Item
      onClick={createPage}
      icon="Add">
      New Page
    </Item>
  );
}

export function ContextMenuNewSheet({ file }) {
  const { globalState, dispatch } = useGlobalStore();

  const createSheet = () => {
    dispatch({
      type: "newFile",
      payload: {
				documentType: "SHEET",
        parentFile: file
      }
    });
  }

  return (
    <Item
      onClick={createSheet}
      icon="Add">
      New Sheet
    </Item>
  );
}

export function ContextMenuRename({ onClick }) {
	return (
		<Item icon="Rename" onClick={onClick}>
			Rename
		</Item>
	);
}