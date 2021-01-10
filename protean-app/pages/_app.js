import '../styles/globals.css'
import AppContainer from '../components/layout/app-container'
import Header from '../components/layout/header'
import Body from '../components/layout/body'
import Panel, { PanelHeader, PanelHeaderIcon, PanelHeaderText, PanelBody } from '../components/layout/panel';
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
        <Panel css="min-w-2/12">
          <PanelHeader>
            <PanelHeaderIcon>
              <FiMenu></FiMenu>
            </PanelHeaderIcon>
            <PanelHeaderText>
              Table Of Contents
            </PanelHeaderText>
          </PanelHeader>
          <PanelBody>
            <BookNavigation></BookNavigation>
          </PanelBody>
        </Panel>

        <Panel>
          <PanelHeader>
            <PanelHeaderIcon>
              <FiBook size="20"></FiBook>
            </PanelHeaderIcon>
            <PanelHeaderText>
              Protean RPG Book
            </PanelHeaderText>
          </PanelHeader>
          <PanelBody>
            <Component {...pageProps} />
          </PanelBody>
        </Panel>

        <Panel>
          <PanelHeader>
            <PanelHeaderIcon>
              <GiStabbedNote size="20"></GiStabbedNote>
            </PanelHeaderIcon>
            <PanelHeaderText>
              Character Sheet
            </PanelHeaderText>
          </PanelHeader>
          <PanelBody>
            <Sheet></Sheet>
          </PanelBody>
        </Panel>
      </Body>
    </AppContainer>
  );
}