import './styles/globals.css';

import React from 'react';
import { GlobalStoreProvider } from './components/storage/global-store';
import AppLayout from './components/protean/layout';
import { CommandBar } from './components/protean/commands/command';
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