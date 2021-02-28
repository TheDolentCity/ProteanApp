import '../styles/globals.css'
import { GlobalStoreProvider } from '../components/stores/global-store'
import ProteanApp from '../components/protean-framework/protean-app'
import ProteanAppHeader from '../components/protean-framework/protean-header'
import ProteanAppBody from '../components/protean-framework/protean-body'
import ProteanDocumentViewer, { ProteanDocumentTab } from '../components/protean-framework/protean-document-viewer'
import ProteanToolPanel from '../components/protean-framework/protean-toolpanel'

import FileExplorerPanel from '../components/panels/file-explorer-panel'
import Sheet from '../components/sheets/sheet'
import ProteanDocumentEditor from '../components/protean-framework/protean-document-editor'
import MdxDocument from '../components/generic/book/mdx-document'

// If I wish to access NextJS's page
/* <Component {...pageProps} /> */

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalStoreProvider>
      <ProteanApp>
        <ProteanAppHeader>
          Protean
        </ProteanAppHeader>

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

        <ProteanAppBody>
          <ProteanToolPanel>
            <FileExplorerPanel label="Protean App Explorer"></FileExplorerPanel>
          </ProteanToolPanel>
          <ProteanDocumentViewer>
            <ProteanDocumentTab label="BOOK // Protean RPG">
              <MdxDocument css="w-full h-full p-8"></MdxDocument>
            </ProteanDocumentTab>
            <ProteanDocumentTab label="SHEET // Carter Guyus">
              <Sheet file={null}></Sheet>
            </ProteanDocumentTab>
          </ProteanDocumentViewer>
        </ProteanAppBody>
      </ProteanApp>
    </GlobalStoreProvider>
  );
}