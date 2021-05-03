import React from 'react';
import { useGlobalStore } from '../../stores/global-store';
import File from './file';
import { Book, Folder } from './container';

export default function FileExplorer() {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className="flex flex-col w-full mx-auto pb-12">
      <h1 className="flex-none w-full pb-2 text-2xl font-semibold">
        Explorer
      </h1>
      <div className="flex-grow h-full overflow-y-auto">
        <FileExplorerRecursive files={globalState?.files}></FileExplorerRecursive>
      </div>
    </div>
  );
}

function FileExplorerRecursive({ files }) {
  return files.map(item => {
    switch (item?.metadata?.type) {
      case "BOOK":
        return (
          <Book key={item.uuid} fileName={item?.metadata?.title}>
            <FileExplorerRecursive files={item?.content}></FileExplorerRecursive>
          </Book> 
        );
      case "FOLDER":
        return (
          <Folder key={item.uuid} fileName={item?.metadata?.title}>
            <FileExplorerRecursive files={item?.content}></FileExplorerRecursive>
          </Folder> 
        );
      case "SHEET":
        return (
          <File key={item.uuid} file={item}></File>
        );
      case "PAGE":
        return (
          <File key={item.uuid} file={item}></File>
        );
      default: return <span key={item.uuid} className="hidden"></span>;
    }
  })
}