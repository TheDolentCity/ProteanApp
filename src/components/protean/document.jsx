import React, { useState, useEffect } from 'react';
import { useGlobalStore } from '../stores/global-store';
import WritingMode from './app-modes/writing-mode';
import ReadingMode from './app-modes/reading-mode';
import PlayingMode from './app-modes/playing-mode';
import Page from '../generic/book/page';
import MdxRender from '../generic/book/mdx-render';
import Sheet from '../generic/game/sheet';
import TextareaAutosize from 'react-textarea-autosize';

export default function Document() {
	return (
    <div className="flex-grow h-full overflow-y-auto scroll">
			<WritingMode>
				<WritingDocument></WritingDocument>
			</WritingMode>
			<ReadingMode>
				<ReadingDocument></ReadingDocument>
			</ReadingMode>
			<PlayingMode>
				<PlayingDocument></PlayingDocument>
			</PlayingMode>
		</div>
	);
}

function WritingDocument() {
  const { globalState, dispatch } = useGlobalStore();
  const [document, setDocument] = useState(globalState.activeFile);

  // Update document when active file changes
  useEffect(() => {
    if (globalState.activeFile !== null && globalState.activeFile !== undefined) {
      setDocument(globalState.activeFile);
    }
  }, [globalState.activeFile]);

  // Sends the local document data to global storage
  const updateDocument = (value) => {
		// console.log(`Document:${document}\nContent:${document?.content}\nIndex:${index}`);
    if (document === undefined) {
      console.log(`document is undefined on Document object.`);
    }
    else {
      let newDocument = { ...document };
			newDocument.content = value;
      setDocument(newDocument);
			console.log("Dispatch Document:\n" + JSON.stringify(newDocument, null, 2));
      dispatch({
        type: "updateActiveFile",
        payload: {
          activeFile: newDocument
        }
      });
    }
  }

  return (
		<div className="w-full max-w-md p-12 text-left">
			<TextareaAutosize
				rows={2}
				maxRows={10000}
				className="input-text-area h-full text-base"
				placeholder="enter file contents"
				value={document?.content}
				onChange={(e) => updateDocument(e.target.value)}/>
		</div>
  );
}

function ReadingDocument() {
  const { globalState, dispatch } = useGlobalStore();

  if (globalState?.activeFile) {
		switch (globalState.activeFile?.metadata?.type) {
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

function PlayingDocument() {
  const { globalState, dispatch } = useGlobalStore();

  if (globalState?.activeFile) {
		switch (globalState.activeFile?.metadata?.type) {
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

function MdxDocument(props) {
  return (
		<div className="w-full max-w-md p-12 text-left">
			<MdxRender>
				{props.children}
			</MdxRender>
		</div>
  );
}

function SheetDocument(props) {
  return (
		<div className="col-count-2 max-w-md text-left">
			<Sheet>
				{props.children}
			</Sheet>
		</div>
  );
}