import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store'
import ProteanApp from './components/protean-framework/protean-app'
import { ProteanLeftSidebar, ProteanRightSidebar } from './components/protean-framework/protean-sidebar';
import ProteanDocument from './components/protean-framework/protean-document';

export default function App() {
  return (
    <GlobalStoreProvider>
      <ProteanApp>
        <ProteanLeftSidebar></ProteanLeftSidebar>
        <ProteanDocument></ProteanDocument>
        <ProteanRightSidebar></ProteanRightSidebar>
      </ProteanApp>
    </GlobalStoreProvider>
  );
}