import { useGlobalStore } from '../stores/global-store';
import Page from '../generic/book/page';
import MarkdownRenderer from '../generic/book/markdown-renderer';

export default function ProteanDocumentController(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className="flex w-full h-full p-12">
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
    <div class="flex-auto max-w-full">
      <Page title={file.title} parentTitle={file.parentTitle}>
        <MarkdownRenderer>
          {file?.content}
        </MarkdownRenderer>
      </Page>
    </div>
  );
}