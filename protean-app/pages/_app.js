import '../styles/globals.css'
import ProteanApp from '../components/generic/layout/protean-app'
import ProteanAppHeader from '../components/generic/layout/protean-header'
import ProteanAppCommandBar from '../components/generic/layout/protean-command-bar'
import ProteanAppBody from '../components/generic/layout/protean-body'
import ProteanDocumentViewer, { ProteanDocumentTab } from '../components/generic/layout/protean-document-viewer'
import BookNavigationPanel from '../components/panels/book-navigation-panel'
import Sheet from '../components/sheets/sheet'
import PagePanel from '../components/panels/page-panel'
import SheetPanel from '../components/panels/sheet-panel'
import ProteanToolPanel from '../components/generic/layout/protean-toolpanel'

export default function MyApp({ Component, pageProps }) {
  return (
    <ProteanApp>
      <ProteanAppHeader>
        Protean
      </ProteanAppHeader>
      <ProteanAppCommandBar>
      </ProteanAppCommandBar>
      <ProteanAppBody>
        <ProteanToolPanel>
          <BookNavigationPanel bookName="Protean RPG"></BookNavigationPanel>
          <BookNavigationPanel bookName="Protean RPG"></BookNavigationPanel>
        </ProteanToolPanel>
        <ProteanDocumentViewer>
          <ProteanDocumentTab label="BOOK - Protean RPG">
            <Component {...pageProps} />
          </ProteanDocumentTab>
          <ProteanDocumentTab label="SHEET - Carter Guyus">
            <Sheet file={null}></Sheet>
          </ProteanDocumentTab>
        </ProteanDocumentViewer>
        <ProteanToolPanel>
          <BookNavigationPanel bookName="Protean RPG"></BookNavigationPanel>
          <BookNavigationPanel bookName="Protean RPG"></BookNavigationPanel>
        </ProteanToolPanel>
      </ProteanAppBody>
    </ProteanApp>
  );
}