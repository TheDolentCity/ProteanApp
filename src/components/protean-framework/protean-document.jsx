import React from 'react';
import { useGlobalStore } from '../stores/global-store';
import Page from '../generic/book/page';
import MdxRender from '../generic/book/mdx-render';
import Sheet from '../generic/game/sheet';

export default function ProteanDocument() {
  const { globalState, dispatch } = useGlobalStore();

  const activePage = () => {
    return globalState?.activeFile?.content[globalState?.activeFile?.metadata.activePage];
  }
  
  if (globalState?.activeFile) {
    switch (globalState.activeFile?.metadata?.type) {
      case "BOOK":
        // Render pages if one is selected
        if (globalState.activePage !== null) {
          return (
            <MdxDocument
              title={activePage().metadata.title}
              icon={globalState.fileIcons[activePage().metadata.type]}>
              {activePage().content}
            </MdxDocument>
          );
        }
        // Else render the book metadata
        else {
          return (
            <MdxDocument
              title={globalState?.activeFile.metadata.title}
              icon={globalState.fileIcons[globalState.activeFile.metadata.type]}>
              Please select a page to view book contents.
            </MdxDocument>
          );
        }
      case "SHEET":
        return (
          <SheetDocument
            title={globalState?.activeFile.metadata.title}
            icon={globalState.fileIcons[globalState.activeFile.metadata.type]}>
          </SheetDocument>
        );
      default:
        return (
          <MdxDocument
            title={globalState?.activeFile?.metadata?.title}>
            {globalState?.activeFile?.content}
          </MdxDocument>
        );
    }
  }
  else return <Page></Page>;
}

function Document(props) {
  return (
    <Page title={props.title} icon={props.icon}>
      {props.children}
    </Page>
  );
}

function MdxDocument(props) {
  return (
    <Document title={props.title} icon={props.icon}>
      <MdxRender>
        {props.children}
      </MdxRender>
    </Document>
  );
}

function SheetDocument(props) {
  return (
    <Document title={props.title} icon={props.icon}>
      <Sheet>
        {props.children}
      </Sheet>
    </Document>
  );
}