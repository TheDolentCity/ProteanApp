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
          label="Table Of Contents"
          isOpen>
          <Component {...pageProps} />
        </Panel>

        {/* <Panel css="min-w-2/12">
          <PanelHeader>
            <PanelHeaderIcon>
              <FiMenu></FiMenu>
            </PanelHeaderIcon>
            <PanelHeaderLabel>
              Table Of Contents
            </PanelHeaderLabel>
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
            <PanelHeaderLabel>Protean RPG Book</PanelHeaderLabel>
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
            <PanelHeaderLabel>
              Character Sheet
            </PanelHeaderLabel>
          </PanelHeader>
          <PanelBody>
            <Sheet></Sheet>
          </PanelBody>
        </Panel> */}
      </Body>
    </AppContainer>
  );
}