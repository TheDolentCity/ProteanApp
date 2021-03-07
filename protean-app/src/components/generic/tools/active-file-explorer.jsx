import { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import { FileExplorerSection } from './file-explorer';
import FabricIcon from '../icons/fabric-icon';

export default function ActiveFilesExplorer() {
  const { globalState, dispatch } = useGlobalStore();

  return (
    globalState.activeFiles.map(file => (
      <FileExplorerSection key={file.uuid} section={file}></FileExplorerSection>
    ))
  );
}