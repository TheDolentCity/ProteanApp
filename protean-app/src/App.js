import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store'
import ProteanApp from './components/protean-framework/protean-app'
import ProteanAppHeader from './components/protean-framework/protean-header'
import ProteanAppBody from './components/protean-framework/protean-body'
import ProteanDocumentViewer, { ProteanDocumentTab } from './components/protean-framework/protean-document-viewer'
import ProteanToolPanel from './components/protean-framework/protean-toolpanel'

import ActiveFilesExplorer from './components/generic/tools/active-file-explorer';
import AllFilesExplorer from './components/generic/tools/all-files-explorer';
import Sheet from './components/sheets/sheet'
import MarkdownRenderer from './components/generic/book/mdx-document'
import Page from './components/generic/book/page';
import ProteanPanel from './components/protean-framework/protean-panel';
import ProteanAppCommandBar, { CommandAdmin, CommandDownload, CommandGroup, CommandRead, CommandUpload, CommandWrite } from './components/protean-framework/protean-command-bar';
import ProteanDocumentController from './components/protean-framework/protean-document-controller';

export default function App() {
  return (
    <GlobalStoreProvider>
      <ProteanApp>
        <ProteanAppCommandBar>
          <CommandGroup>
            <CommandAdmin></CommandAdmin>
            <CommandWrite></CommandWrite>
            <CommandRead></CommandRead>
          </CommandGroup>
          <CommandGroup>
            <CommandUpload></CommandUpload>
            <CommandDownload></CommandDownload>
          </CommandGroup>
        </ProteanAppCommandBar>
        <ProteanAppBody>
          <ProteanToolPanel label="Tool Panel">
            <ProteanPanel label="Active Files">
              {/* <ActiveFilesExplorer></ActiveFilesExplorer> */}
            </ProteanPanel>
            <ProteanPanel label="All Files">
              <AllFilesExplorer></AllFilesExplorer>
            </ProteanPanel>
          </ProteanToolPanel>
          <ProteanDocumentController></ProteanDocumentController>
        </ProteanAppBody>
      </ProteanApp>
    </GlobalStoreProvider>
  );
}