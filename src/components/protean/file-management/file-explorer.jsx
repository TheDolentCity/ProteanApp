import React, { useRef } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import { ContextMenu, ContextMenuSection, ContextMenuNewBook, ContextMenuNewFolder, ContextMenuNewPage } from './context-menu';
import { Book, Folder } from './container';
import File from './file';

export default function FileExplorer() {
  const { globalState, dispatch } = useGlobalStore();
  const itemRef = useRef(null);

  return (
    <div className="flex flex-col w-full h-full mx-auto">
      <h1 className="flex-none w-full sm:px-4 md:px-8 sm:pt-4 md:pt-8 pb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Explorer
      </h1>
      <div className="flex-shrink">
        <FileExplorerTree files={globalState?.files} iteration={0}></FileExplorerTree>
      </div>
      <div ref={itemRef} className="flex-grow pb-12">
				<ContextMenu itemRef={itemRef}>
					<ContextMenuSection>
						<ContextMenuNewBook file={null}></ContextMenuNewBook>
						<ContextMenuNewFolder file={null}></ContextMenuNewFolder>
						<ContextMenuNewPage file={null}></ContextMenuNewPage>
					</ContextMenuSection>
				</ContextMenu>
      </div>
    </div>
  );
}

/*
  A recursive tree component that creates book/folder disclosures
  and files that the user can select or modify.
*/
function FileExplorerTree({ files, iteration }) {
  return (
    <div>
      {
        files.map(item => {
          switch (item?.metadata?.type) {
            case "BOOK":
              return (
                <Book key={item.uuid} file={item} indent={iteration}>
                  <FileExplorerTree files={item?.content} iteration={iteration+1}></FileExplorerTree>
                </Book> 
              );
            case "FOLDER":
              return (
                <Folder key={item.uuid} file={item} indent={iteration}>
                  <FileExplorerTree files={item?.content} iteration={iteration+1}></FileExplorerTree>
                </Folder>
              );
            case "SHEET":
              return <File key={item.uuid} file={item} indent={iteration}></File>;
            case "PAGE":
              return <File key={item.uuid} file={item} indent={iteration}></File>;
            default:
              return <span key={item.uuid} className="hidden"></span>;
          }
        })
      }
    </div>
  );
}