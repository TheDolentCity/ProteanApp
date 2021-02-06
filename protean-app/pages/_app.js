import '../styles/globals.css'
import GlobalContextProvider from '../components/context/global-context'
import AppContainer, { AppHeader, AppBody, AppFooter } from '../components/generic/layout/app-layout'
import BookNavigationPanel from '../components/panels/book-navigation-panel'
import PagePanel from '../components/panels/page-panel'
import SheetPanel from '../components/panels/sheet-panel'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <AppContainer>
        <AppHeader>
          Protean RPG
        </AppHeader>
        <AppBody>
          <BookNavigationPanel></BookNavigationPanel>
          <PagePanel>
            <Component {...pageProps} />
          </PagePanel>
          <SheetPanel></SheetPanel>

          {/* This is specifically to add a divide border when far right panel is collapsed */}
          <span></span>
        </AppBody>
      </AppContainer>
    </GlobalContextProvider>
  );
}