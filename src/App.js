import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store'
import ProteanApp from './components/protean-framework/protean-app'
import { ProteanLeftSidebar, ProteanRightSidebar } from './components/protean-framework/protean-sidebar';
import ProteanDocument from './components/protean-framework/protean-document';
import ProteanSettingsModal from './components/protean-framework/protean-settings';

export default function App() {
  return (
    <GlobalStoreProvider>
      <ProteanApp>
        <ProteanLeftSidebar></ProteanLeftSidebar>
        <ProteanDocument></ProteanDocument>
        <ProteanSettingsModal></ProteanSettingsModal>
        <ProteanRightSidebar></ProteanRightSidebar>
      </ProteanApp>
    </GlobalStoreProvider>
  );
}