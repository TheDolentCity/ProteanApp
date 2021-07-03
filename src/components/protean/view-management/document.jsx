import React, { useState, useEffect } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import WritingMode from '../app-modes/writing-mode';
import ReadingMode from '../app-modes/reading-mode';
import PlayingMode from '../app-modes/playing-mode';
import Page from '../../generic/book/page';
import MdxRender from '../../generic/book/mdx-render';
import Sheet from '../../generic/game/sheet';
import TextareaAutosize from 'react-textarea-autosize';

export default function Document({ uuid }) {
	return (
    <div className="w-full h-full">
			<WritingMode>
				<WritingDocument documentId={uuid}></WritingDocument>
			</WritingMode>
			<ReadingMode className="">
				<ReadingDocument documentId={uuid}></ReadingDocument>
			</ReadingMode>
			<PlayingMode>
				<PlayingDocument documentId={uuid}></PlayingDocument>
			</PlayingMode>
		</div>
	);
}

function WritingDocument({ documentId }) {
  const { globalState, dispatch } = useGlobalStore();
  const [document, setDocument] = useState(globalState.openFiles.find(file => file.uuid === documentId));

  // Update document when active file changes
  useEffect(() => {
    if (globalState.openFiles !== null && globalState.openFiles !== undefined) {
      setDocument(globalState.openFiles.filter((file) => { return file.uuid === documentId }));
    }
  }, [globalState.openFiles]);

  // Sends the local document data to global storage
  const updateDocument = (value) => {
		console.log(`Sending Document To Global Storage\nContent:${document?.content}\nValue:${value}`);
    if (document === undefined) {
      console.log(`document is undefined on Document object.`);
    }
    else {
      let newDocument = { ...document };
			newDocument.content = value;
      setDocument(newDocument);
			console.log("Dispatch Document:\n" + JSON.stringify(newDocument, null, 2));
      dispatch({
        type: "updateFile",
        payload: {
          file: newDocument
        }
      });
    }
  }

	switch (document?.metadata?.type) {
		case "SHEET":
			return (
				<SheetDocument
					title={document.metadata.title}
					icon={globalState.fileIcons[document.metadata.type]}>
				</SheetDocument>
			);
		default:
			return (
				<div className="w-full max-w-md p-12 text-left">
					<TextareaAutosize
						rows={2}
						maxRows={10000}
						className="input-text-area w-full h-full text-base"
						placeholder="enter file contents"
						value={document?.content}
						onChange={(e) => updateDocument(e.target.value)}/>
				</div>
			);
	}
}

function ReadingDocument({ documentId }) {
  const { globalState, dispatch } = useGlobalStore();
	const file = globalState.views.find(view => view.contents?.uuid === documentId).contents;

  if (file) {
		switch (file?.metadata?.type) {
			case "SHEET":
				return (
					<SheetDocument
						title={file?.metadata?.title}
						icon={globalState.fileIcons[file?.metadata?.type]}>
					</SheetDocument>
				);
			default:
				return (
					<MdxDocument>
						{file?.content}
					</MdxDocument>
				);
		}
	}
	else return <Page></Page>;
}

function PlayingDocument({ documentId }) {
  const { globalState, dispatch } = useGlobalStore();
	const file = globalState.views.find(view => view.contents?.uuid === documentId).contents;

  if (file) {
		switch (file.metadata.type) {
			case "SHEET":
				return (
					<SheetDocument
						title={file.metadata.title}
						icon={globalState.fileIcons[file.metadata.type]}>
					</SheetDocument>
				);
			default:
				return (
					<MdxDocument
						title={file.metadata.title}>
						{file.content}
					</MdxDocument>
				);
		}
	}
	else return <Page></Page>;
}

function MdxDocument({ children }) {
  return (
		<div className="w-full h-full p-12 text-left">
			<MdxRender>
				{children}
			</MdxRender>
		</div>
  );
}

function SheetDocument({ file, children }) {
  return (
		<div className="w-full h-full text-left">
			<Sheet fileData={file}>
				{children}
			</Sheet>
		</div>
  );
}