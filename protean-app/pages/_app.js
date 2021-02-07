import '../styles/globals.css'
import ProteanApp, { ProteanAppHeader, ProteanAppCommandBar, ProteanAppBody } from '../components/generic/layout/app-layout'
import BookNavigationPanel from '../components/panels/book-navigation-panel'
import PagePanel from '../components/panels/page-panel'
import SheetPanel from '../components/panels/sheet-panel'

export default function MyApp({ Component, pageProps }) {
  return (
    <ProteanApp>
      <ProteanAppHeader>
        Protean
      </ProteanAppHeader>
      <ProteanAppCommandBar>
        
      </ProteanAppCommandBar>
      <ProteanAppBody>
        <BookNavigationPanel bookName="Protean RPG"></BookNavigationPanel>
        <PagePanel>
          <Component {...pageProps} />
        </PagePanel>
        <SheetPanel></SheetPanel>

        {/* This is specifically to add a divide border when far right panel is collapsed */}
        <span></span>
      </ProteanAppBody>
    </ProteanApp>
  );
}