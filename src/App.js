import logo from './logo.svg';
import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/stores/global-store';
import AppLayout, { Sidebar } from './components/protean/layout';
import { CommandBar } from './components/protean/commands/command';
import FileExplorer from './components/protean/file-management/file-explorer';
import { ViewController } from './components/protean/view-management/view';

export default function App() {
  return (
    <GlobalStoreProvider>
      <AppLayout>
        <CommandBar></CommandBar>
				<ViewController></ViewController>
      </AppLayout>
    </GlobalStoreProvider>
  );
}