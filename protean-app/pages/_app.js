import '../styles/globals.css'
import AppContainer from '../components/layout/app-container'
import Header from '../components/layout/header'
import Body from '../components/layout/body'
import Panel, { PanelHeader, PanelHeaderIcon, PanelHeaderLabel, PanelBody } from '../components/layout/panel';
import BookNavigation from '../components/navigation/book-navigation';
import Sheet from '../components/sheets/sheet'

import { FiMenu } from 'react-icons/fi'
import { FiBook } from 'react-icons/fi'
import { GiStabbedNote } from 'react-icons/gi'

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContainer>
      <Header>Protean RPG</Header>
      <Body>
        <Panel
          icon={<FiMenu></FiMenu>}
          label="Table Of Contents">
          <BookNavigation></BookNavigation>
        </Panel>
        <Panel
          icon={<FiBook size="20"></FiBook>}
          label="Protean RPG">
          <Component {...pageProps} />
        </Panel>
        <Panel
          icon={<GiStabbedNote size="20"></GiStabbedNote>}
          label="Character Sheet">
          <Sheet></Sheet>
        </Panel>
      </Body>
    </AppContainer>
  );
}