import React, { useRef } from 'react';
import { useContextMenu, Menu, Item, Separator } from "react-contexify";
import { useGlobalStore } from '../../stores/global-store';
import { Book, Folder } from './container';
import File, { FileContextMenu } from './file';

export default function FileExplorer() {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className="flex flex-col w-full mx-auto pb-12">
      <h1 className="flex-none w-full sm:p-4 md:p-8 pb-2 text-2xl font-semibold">
        Explorer
      </h1>
      <div className="flex-grow">
        <FileExplorerTree files={globalState?.files} iteration={0}></FileExplorerTree>
      </div>
    </div>
  );
}

const MENU_ID = "FILE-EXPLORER-CONTEXT-MENU";

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