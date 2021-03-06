import React from 'react'
import './styles/globals.css'
import { GlobalStoreProvider } from './components/stores/global-store'
import ProteanSkeleton, { ProteanAppBody } from './components/protean-framework/protean-skeleton'
import ProteanAppHeader from './components/protean-framework/protean-header'
import ProteanAppCommandBar, { CommandGroup, CommandAdmin, CommandRead, CommandWrite, CommandUpload, CommandDownload } from './components/protean-framework/protean-command-bar'
import ProteanDocumentViewer, { ProteanDocumentTab } from './components/protean-framework/protean-document-viewer'
import ProteanToolPanel from './components/protean-framework/protean-toolpanel'

import FileExplorerPanel from './components/panels/file-explorer-panel'
import Page from './components/generic/book/page'
import Sheet from './components/sheets/sheet'
import ProteanDocumentEditor from './components/protean-framework/protean-document-editor'
import MarkdownParser from './components/generic/book/mdx-document'

// If I wish to access NextJS's page
/* <Component {..pageProps} /> */

export default function App(props) {
  return (
    <GlobalStoreProvider>
      <ProteanSkeleton>
        <ProteanAppHeader>
          Protean
        </ProteanAppHeader>
        <ProteanAppBody>
          <ProteanToolPanel>
            <FileExplorerPanel label="Protean App Explorer"></FileExplorerPanel>
          </ProteanToolPanel>
          <MarkdownParser></MarkdownParser>
        </ProteanAppBody>

        {/* <ProteanAppCommandBar>
          <CommandGroup>
            <CommandAdmin></CommandAdmin>
            <CommandRead></CommandRead>
            <CommandWrite></CommandWrite>
          </CommandGroup>
          <CommandGroup>
            <CommandUpload></CommandUpload>
            <CommandDownload></CommandDownload>
          </CommandGroup>
        </ProteanAppCommandBar> */}

        {/* <ProteanAppBody>
          <ProteanToolPanel>
            <FileExplorerPanel label="Protean App Explorer"></FileExplorerPanel>
          </ProteanToolPanel>
          <ProteanDocumentEditor>

          </ProteanDocumentEditor>
          <ProteanDocumentViewer>
            <ProteanDocumentTab label="BOOK // Protean RPG">
              <Page></Page>
            </ProteanDocumentTab>
            <ProteanDocumentTab label="SHEET // Carter Guyus">
              <Sheet file={null}></Sheet>
            </ProteanDocumentTab>
          </ProteanDocumentViewer>
        </ProteanAppBody> */}
      </ProteanSkeleton>
    </GlobalStoreProvider>
  );
}