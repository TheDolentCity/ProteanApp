import React, { useState } from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import ErrorBoundary from '../error-boundary';
import { DocumentModes } from './../../storage/constants';
import { ReadingDocument, WritingDocument, PlayingDocument } from './document';
import {
	CloseViewButton,
	ViewButton,
	ViewContainer,
	ViewContent,
	ViewDivider,
	ViewHeader,
	ViewIcon,
	ViewItem,
	ViewLabel,
	ViewOptionsDropdown
} from './view';

// Document context
const DocumentModeContext = React.createContext(DocumentModes.READING);
export const useDocumentModeContext = () => React.useContext(DocumentModeContext);

export default function DocumentView({ view }) {
	const [ mode, setMode ] = useState(DocumentModes.READING);

	return (
		<ViewContainer className="flex-1">
			<ViewHeader>
				<ViewItem className="flex-grow">
					<ViewIcon viewType={view.type}></ViewIcon>
					<ViewLabel>
						{view.title}
					</ViewLabel>
				</ViewItem>
				<ViewButton 
					className={mode === DocumentModes.READING ? "text-contrast" : ""}
					onClick={() => setMode(DocumentModes.READING)}>
					<FabricIcon name="View"></FabricIcon>
				</ViewButton>
				<ViewButton
					className={mode === DocumentModes.WRITING ? "text-contrast" : ""}
					onClick={() => setMode(DocumentModes.WRITING)}>
					<FabricIcon name="Edit"></FabricIcon>
				</ViewButton>
				<ViewButton
					className={mode === DocumentModes.PLAYING ? "text-contrast" : ""}
					onClick={() => setMode(DocumentModes.PLAYING)}>
					<FabricIcon name="Game"></FabricIcon>
				</ViewButton>
				<ViewDivider />
				<ViewOptionsDropdown view={view} />
				<CloseViewButton view={view} />
			</ViewHeader>
			<ViewContent>
				<DocumentModeContext.Provider value={mode}>
					<DocumentContents content={view.contents}></DocumentContents>
				</DocumentModeContext.Provider>
			</ViewContent>
		</ViewContainer>
	);
}

export function DocumentContents({ content }) {
	const mode = useDocumentModeContext();
	switch (mode) {
		case DocumentModes.READING:
			return (
				<ErrorBoundary
					fallbackUI={
						<div className="p-12">
							<h2>Critical Error</h2>
							<p>Cannot render {content}</p>
						</div>
					}>
					<ReadingDocument documentId={content}></ReadingDocument>
				</ErrorBoundary>
			);
		case DocumentModes.WRITING:
			return (
				<ErrorBoundary
					fallbackUI={
						<div className="p-12">
							<h2>Critical Error</h2>
							<p>Cannot render {content}</p>
						</div>
					}>
					<WritingDocument documentId={content}></WritingDocument>
				</ErrorBoundary>
			);
		case DocumentModes.PLAYING:
			return (
				<ErrorBoundary
					fallbackUI={
						<div className="p-12">
							<h2>Critical Error</h2>
							<p>Cannot render {content}</p>
						</div>
					}>
					<PlayingDocument documentId={content}></PlayingDocument>
				</ErrorBoundary>
			);
		default: return <span></span>;
	}
}