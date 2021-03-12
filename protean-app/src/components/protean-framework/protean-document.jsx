import React from 'react';
import { useGlobalStore } from '../stores/global-store';
import Page from '../generic/book/page';
import MdxDocument from '../generic/book/mdx-document';

export default function ProteanDocument() {
  const { globalState, dispatch } = useGlobalStore();

  console.log("ActivePage: " + JSON.stringify(globalState?.activePage));
  console.log("ActiveFile: " + JSON.stringify(globalState?.activeFile));
  if (globalState?.activeFile) {
    if (globalState.activeFile.type == "BOOK") {
      return (
        <Document
          title={globalState?.activePage.title}
          subtitle={globalState?.activeFile.title}>
          {globalState?.activePage.content}
        </Document>
      );
    }
    else {
      return (
        <Document
          title={globalState?.activeFile.title}
          subtitle={globalState?.activeFile.parentTitle}>
          {globalState?.activeFile.content}
        </Document>
      );
    }
  }
  else return <span></span>;
}

function Document(props) {
  return (
    <div className="flex-grow max-w-9/12 px-20 py-10">
      <Page title={props.title} subtitle={props.subtitle}>
        <MdxDocument>
          {props.children}
        </MdxDocument>
      </Page>
    </div>
  );
}