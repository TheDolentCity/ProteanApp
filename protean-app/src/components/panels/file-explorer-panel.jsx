import React from 'react';
import ProteanPanel from '../protean-framework/protean-panel';
import FileExplorer from '../generic/navigation/file-explorer';

export default function FileExplorerPanel(props) {
  return (
    <ProteanPanel
      label={props.label}
      openCss="">
      <FileExplorer></FileExplorer>
    </ProteanPanel>
  );
}