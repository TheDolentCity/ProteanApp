import React, { useEffect, useState } from 'react';
import { useGlobalStore } from '../../storage/global-store';
import Item, { ItemIcon, ItemContent } from './item';

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
      if (event.target !== ref) {
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
      <div className="fixed flex flex-none flex-col min-w-48 -mx-4 rounded shadow-xl bg-white border border-gray-300 dark:border dark:border-gray-600 divide-y divide-gray-300 dark:bg-gray-700 dark:divide-gray-600" style={style}>
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
  const { dispatch } = useGlobalStore();

  const deleteFile = () => {
    dispatch({
      type: "deleteFile",
      payload: {
        file: file
      }
    });
  }

  return (
    <Item onClick={deleteFile} className="text-important">
			<ItemIcon icon="Cancel"></ItemIcon>
			<ItemContent>
      	Delete
			</ItemContent>
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
			<Item onClick={downloadFile} className="text-important">
				<ItemIcon icon="Download"></ItemIcon>
				<ItemContent>
					Download
				</ItemContent>
			</Item>
      <a
        className="hidden"
				href="/"
        download={getFileName(file)}
        ref={fileOutputRef}>
        DOWNLOAD
      </a>
    </div>
  );
}

export function ContextMenuNewBook({ file }) {
  const { dispatch } = useGlobalStore();

  const createBook = () => {
    dispatch({
      type: "newFile",
      payload: {
				fileType: "BOOK",
        parentFile: file
      }
    });
  }

  return (
		<Item onClick={createBook} className="text-important">
			<ItemIcon icon="Add"></ItemIcon>
			<ItemContent>
				New Book
			</ItemContent>
		</Item>
  );
}

export function ContextMenuNewFolder({ file }) {
  const { dispatch } = useGlobalStore();

  const createFolder = () => {
    dispatch({
      type: "newFile",
      payload: {
				fileType: "FOLDER",
        parentFile: file
      }
    });
  }

  return (
		<Item onClick={createFolder} className="text-important">
			<ItemIcon icon="Add"></ItemIcon>
			<ItemContent>
				New Folder
			</ItemContent>
		</Item>
  );
}

export function ContextMenuNewPage({ file }) {
  const { dispatch } = useGlobalStore();

  const createPage = () => {
    dispatch({
      type: "newFile",
      payload: {
				fileType: "PAGE",
        parentFile: file
      }
    });
  }

  return (
		<Item onClick={createPage} className="text-important">
			<ItemIcon icon="Add"></ItemIcon>
			<ItemContent>
				New Page
			</ItemContent>
		</Item>
  );
}

export function ContextMenuNewSheet({ file }) {
  const { dispatch } = useGlobalStore();

  const createSheet = () => {
    dispatch({
      type: "newFile",
      payload: {
				fileType: "SHEET",
        parentFile: file
      }
    });
  }

  return (
		<Item onClick={createSheet} className="text-important">
			<ItemIcon icon="Add"></ItemIcon>
			<ItemContent>
			New Sheet
			</ItemContent>
		</Item>
  );
}

export function ContextMenuOpenToTheSide({ file }) {
  const { dispatch } = useGlobalStore();

  const openToTheSide = () => {
    dispatch({
      type: 'openView',
      payload: {
				type: "DOCUMENT",
				title: file.metadata.title,
				contents: file.uuid
      }
    });
  }

  return (
		<Item onClick={openToTheSide} className="text-important">
			<ItemIcon icon="OpenInNewWindow"></ItemIcon>
			<ItemContent>
			Open to the side
			</ItemContent>
		</Item>
  );
}

export function ContextMenuRename({ onClick }) {
	return (
		<Item onClick={onClick} className="text-important">
			<ItemIcon icon="Rename"></ItemIcon>
			<ItemContent>
			Rename
			</ItemContent>
		</Item>
	);
}