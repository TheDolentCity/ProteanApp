import React from 'react';
import { useGlobalStore } from '../stores/global-store';
import Page from '../generic/book/page';
import MdxRender from '../generic/book/mdx-render';
import Sheet from '../generic/game/sheet';

export default function ProteanDocument() {
  const { globalState, dispatch } = useGlobalStore();
  
  if (globalState?.activeFile) {
    switch (globalState.activeFile.type) {
      case "BOOK":
        // Render pages if one is selected
        if (globalState.activePage !== null) {
          return (
            <MdxDocument
              title={globalState?.activePage.title}
              subtitle={globalState?.activeFile.title}
              icon={globalState.fileIcons[globalState.activePage.type]}>
              {globalState?.activePage.content}
            </MdxDocument>
          );
        }
        // Else render the book metadata
        else {
          return (
            <MdxDocument
              title={globalState?.activeFile.title}
              subtitle="This is a book"
              icon={globalState.fileIcons[globalState.activeFile.type]}>
              Please select a page to view book contents.
            </MdxDocument>
          );
        }
      case "SHEET":
        return (
          <SheetDocument
            title={globalState?.activeFile.title}
            subtitle="Character Sheet"
            icon={globalState.fileIcons[globalState.activeFile.type]}>
            Please select a page to view book contents.
          </SheetDocument>
        );
      default:
        return (
          <MdxDocument
            title={globalState?.activeFile.title}
            subtitle={globalState?.activeFile.parentTitle}>
            {globalState?.activeFile.content}
          </MdxDocument>
        );
    }
  }
  else return <span></span>;
}

function Document(props) {
  return (
    <div className="flex-grow flex justify-center px-12 py-6 xl:px-20 xl:py-10">
      <Page title={props.title} subtitle={props.subtitle} icon={props.icon}>
        {props.children}
      </Page>
    </div>
  );
}

function MdxDocument(props) {
  return (
    <Document title={props.title} subtitle={props.subtitle} icon={props.icon}>
      <MdxRender>
        {props.children}
      </MdxRender>
    </Document>
  );
}

function SheetDocument(props) {
  return (
    <Document title={props.title} subtitle={props.subtitle} icon={props.icon}>
      <Sheet>
        {props.children}
      </Sheet>
    </Document>
  );
}