import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store';
import ErrorBoundary from './components/protean/error-boundary';
import Document from './components/protean/document';
import ProteanSettingsModal from './components/protean/settings';
import AppLayout, { Sidebar } from './components/protean/layout';
import PagesTool from './components/protean/tools/pages-tool';
import ControlsTool from './components/protean/tools/controls-tool';
import FilesTool from './components/protean/tools/files-tool';

export default function App() {
  return (
    <GlobalStoreProvider>
      <AppLayout>
        <Sidebar>
          <ControlsTool></ControlsTool>
          <FilesTool></FilesTool>
          <PagesTool></PagesTool>
        </Sidebar>
        <ErrorBoundary
          fallbackUI={
            <div className="p-12">
              <h1>Critical Error</h1>
              <p>Cannot render ProteanDocument</p>
            </div>
          }>
          <Document></Document>
        </ErrorBoundary>
      </AppLayout>
      <ProteanSettingsModal></ProteanSettingsModal>
    </GlobalStoreProvider>
  );
}