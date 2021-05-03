import React, { useRef } from 'react';
import { useContextMenu, Menu, Item, Separator } from "react-contexify";
import { useGlobalStore } from '../../stores/global-store';
import { Book, Folder } from './container';
import File, { FileContextMenu } from './file';

export default function FileExplorer() {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className="flex flex-col w-full mx-auto pb-12">
      <h1 className="flex-none w-full pb-2 text-2xl font-semibold">
        Explorer
      </h1>
      <div className="flex-grow h-full overflow-y-auto">
        <FileExplorerTree files={globalState?.files}></FileExplorerTree>
      </div>
    </div>
  );
}

const MENU_ID = "FILE-EXPLORER-CONTEXT-MENU";

/*
  A recursive tree component that creates book/folder disclosures
  and files that the user can select or modify.
*/
function FileExplorerTree({ files }) {
  return (
    <div>
      {
        files.map(item => {
          switch (item?.metadata?.type) {
            case "BOOK":
              return (
                <Book key={item.uuid} fileName={item?.metadata?.title}>
                  <FileExplorerTree files={item?.content}></FileExplorerTree>
                </Book> 
              );
            case "FOLDER":
              return (
                <Folder key={item.uuid} fileName={item?.metadata?.title}>
                  <FileExplorerTree files={item?.content}></FileExplorerTree>
                </Folder> 
              );
            case "SHEET":
              return <File key={item.uuid} file={item}></File>;
            case "PAGE":
              return <File key={item.uuid} file={item}></File>;
            default:
              return <span key={item.uuid} className="hidden"></span>;
          }
        })
      }
    </div>
  );
}