import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store';
import ProteanApp from './components/protean-framework/protean-app';
import ProteanErrorBoundary from './components/protean-framework/protean-error-boundary';
import { ProteanLeftSidebar, ProteanRightSidebar } from './components/protean-framework/protean-sidebar';
import ProteanDocument from './components/protean-framework/protean-document';
import ProteanSettingsModal from './components/protean-framework/protean-settings';

export default function App() {
  return (
    <GlobalStoreProvider>
      <ProteanApp>
        <ProteanLeftSidebar></ProteanLeftSidebar>
        <ProteanErrorBoundary
          fallbackUI={
            <div className="p-12">
              <h1>Critical Error</h1>
              <p>Cannot render ProteanDocument</p>
            </div>
          }>
          <ProteanDocument></ProteanDocument>
        </ProteanErrorBoundary>
        <ProteanSettingsModal></ProteanSettingsModal>
        <ProteanRightSidebar></ProteanRightSidebar>
      </ProteanApp>
    </GlobalStoreProvider>
  );
}