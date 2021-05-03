import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store';
import AppLayout, { Sidebar } from './components/protean/layout';
import { CommandBar } from './components/protean/commands/command';
import ErrorBoundary from './components/protean/error-boundary';
import Document from './components/protean/document';
import FileExplorer from './components/protean/files/file-explorer';

export default function App() {
  return (
    <GlobalStoreProvider>
      <AppLayout>
        <CommandBar></CommandBar>
        <Sidebar>
          <FileExplorer></FileExplorer>
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
    </GlobalStoreProvider>
  );
}