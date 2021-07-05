import React from 'react';
import { useGlobalStore } from '../../storage/global-store';
import { Book, Folder } from './container';
import File from './file';
import { FileTypes } from './../../storage/constants';

export default function FileExplorer() {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className="flex flex-col w-full h-full mx-auto">
      <div className="flex-shrink">
        <FileExplorerTree files={globalState.fileSystem.getFiles()} iteration={0}></FileExplorerTree>
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
          switch (item.data?.metadata?.type) {
            case FileTypes.BOOK:
              return (
                <Book key={item.data.uuid} file={item.data} indent={iteration}>
                  <FileExplorerTree files={item.children} iteration={iteration+1}></FileExplorerTree>
                </Book> 
              );
            case FileTypes.FOLDER:
              return (
                <Folder key={item.data.uuid} file={item.data} indent={iteration}>
                  <FileExplorerTree files={item.children} iteration={iteration+1}></FileExplorerTree>
                </Folder>
              );
            case FileTypes.SHEET:
              return <File key={item.data.uuid} file={item.data} indent={iteration}></File>;
            case FileTypes.PAGE:
              return <File key={item.data.uuid} file={item.data} indent={iteration}></File>;
            default:
              return <span key={item.data.uuid} className="hidden"></span>;
          }
        })
      }
    </div>
  );
}