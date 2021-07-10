import React, { useState, useEffect } from 'react';
import { useGlobalStore } from '../../storage/global-store';
import Page from '../../generic/book/page';
import MdxRender from '../../generic/book/mdx-render';
import Sheet from '../../generic/game/sheet';
import TextareaAutosize from 'react-textarea-autosize';
import { DocumentModes, FileIcons, FileTypes } from '../../storage/constants';

export function WritingDocument({ documentId }) {
  const { globalState, dispatch } = useGlobalStore();
  const [document, setDocument] = useState(globalState.fileSystem.getFile(documentId));

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
		case FileTypes.SHEET:
			return (
				<SheetDocument
					sheetId={documentId}>
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

export function ReadingDocument({ documentId }) {
  const { globalState, dispatch } = useGlobalStore();
	var file = globalState.fileSystem.getFile(documentId);

  if (file) {
		switch (file?.metadata?.type) {
			case FileTypes.SHEET:
				return (
					<SheetDocument
						sheetId={documentId}>
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

export function PlayingDocument({ documentId }) {
  const { globalState, dispatch } = useGlobalStore();
	var file = globalState.fileSystem.getFile(documentId);

  if (file) {
		switch (file.metadata.type) {
			case FileTypes.SHEET:
				return (
					<SheetDocument
						sheetId={documentId}>
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

function SheetDocument({ sheetId, children }) {
  return (
		<div className="w-full h-full text-left">
			<Sheet sheetId={sheetId}>
				{children}
			</Sheet>
		</div>
  );
}