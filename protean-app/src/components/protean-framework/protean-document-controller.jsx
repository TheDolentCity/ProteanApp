import React from 'react';
import { useGlobalStore } from '../stores/global-store';
import Page from '../generic/book/page';
import MdxDocument from '../generic/book/mdx-document';

export default function ProteanDocumentController(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className="flex w-full h-full p-12 space-x-12">
      {
        globalState.activeFiles.map(file => (
          <ProteanDocument key={file.uuid} file={file}></ProteanDocument>
        ))
      }
    </div>
  );
}

function ProteanDocument({file}) {
  return (
    <div className="flex-auto max-w-9/12">
      <Page title={file.title} parentTitle={file.parentTitle}>
        <MdxDocument>
          {file.content}
        </MdxDocument>
        {/* <MarkdownRenderer>
          {file?.content}
        </MarkdownRenderer> */}
      </Page>
    </div>
  );
}