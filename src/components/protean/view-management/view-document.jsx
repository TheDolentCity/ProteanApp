import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import { useGlobalStore } from '../../storage/global-store';
import ErrorBoundary from '../error-boundary';
import { Directions, DocumentModes } from './../../storage/constants';
import { MenuContainer, MenuSection } from '../../generic/basic-inputs/menu';
import Item from '../file-management/item';
import { ReadingDocument, WritingDocument, PlayingDocument } from './document';
import {
	CloseViewButton,
	ViewButton,
	ViewButtonLabel,
	ViewContainer,
	ViewContent,
	ViewDivider,
	ViewHeader,
	ViewIcon,
	ViewItem,
	ViewLabel
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
				<MoreOptionsDropdown view={view} />
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

function MoreOptionsDropdown({ view }) {
	const { globalState, dispatch } = useGlobalStore();

	const moveView = (direction) => {
		dispatch({
			type: "moveView",
			payload: {
				view: view,
				direction: direction,
			}
		})
	}

	return (
		<Menu as="div" className="relative text-left">
			<Menu.Button className="acc-focus">
				<ViewButtonLabel>
					<FabricIcon name="MoreVertical"></FabricIcon>
				</ViewButtonLabel>
			</Menu.Button>
			<Menu.Items>
				<MenuContainer>
					<MenuSection>
						<Menu.Item>
							{({ active }) => (
								<Item
									onClick={() => moveView(Directions.LEFT)}
									icon="DockLeft"
									important={true}>
									Move View Left
								</Item>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Item
									disabled={true}
									onClick={() => moveView(Directions.RIGHT)}
									icon="DockRight"
									important={true}>
									Move View Right
								</Item>
							)}
						</Menu.Item>
					</MenuSection>
				</MenuContainer>
			</Menu.Items>
		</Menu>
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