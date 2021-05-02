import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store';
import AppLayout, { Sidebar } from './components/protean/layout';
import { CommandBar } from './components/protean/commands/command';
import FilesTool from './components/protean/tools/files-tool';
import PagesTool from './components/protean/tools/pages-tool';
import ErrorBoundary from './components/protean/error-boundary';
import Document from './components/protean/document';

export default function App() {
  return (
    <GlobalStoreProvider>
      <AppLayout>
        <CommandBar>
        </CommandBar>
        <Sidebar>
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
    </GlobalStoreProvider>
  );
}