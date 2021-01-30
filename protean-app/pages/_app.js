import '../styles/globals.css'
import GlobalContextProvider from '../components/context/global-context'
import AppContainer, { AppHeader, AppBody, AppFooter } from '../components/generic/layout/app-layout'
import Panel from '../components/generic/layout/panel';
import BookNavigation from '../components/generic/navigation/book-navigation';
import Sheet from '../components/sheets/sheet'

import { FiMenu } from 'react-icons/fi'
import { FiBook } from 'react-icons/fi'
import { GiStabbedNote } from 'react-icons/gi'

export default function MyApp({ Component, pageProps }) {
  return (
    // <GlobalContextProvider>
      <AppContainer>
        <AppHeader>
          Protean RPG
        </AppHeader>
        <AppBody>
          <Panel
            icon={<FiMenu></FiMenu>}
            label="Table Of Contents"
            openCss="min-w-72 max-w-72">
            <BookNavigation></BookNavigation>
          </Panel>
          <Panel
            icon={<FiBook size="20"></FiBook>}
            label="Protean RPG"
            openCss="">
            <Component {...pageProps} />
          </Panel>
          <Panel
            icon={<GiStabbedNote size="20"></GiStabbedNote>}
            label="Character Sheet"
            openCss="min-w-72">
            <Sheet></Sheet>
          </Panel>
          <span></span>
        </AppBody>
      </AppContainer>
    // </GlobalContextProvider>
  );
}