import React from 'react'
import { useGlobalStore } from '../../storage/global-store';
import { ViewIcons, ViewTypes } from '../../storage/constants';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import ErrorBoundary from '../error-boundary';
import Document from './document';
import FileExplorer from '../file-management/file-explorer';

export function ViewController() {
	const { globalState, dispatch } = useGlobalStore();

	return (
		<div className="flex-grow flex h-full">
			{
				globalState.views.map((view) => (
					<View key={view.uuid} view={view}></View>
				))
			}
		</div>
	);
}

function View({ view }) {
	switch (view.type) {
		case ViewTypes.EXPLORER:
			return (
				<div className="flex-shrink flex flex-col max-w-md border-r border-gray-500 dark:border-gray-600">
					<ViewHeader>
						<ViewItem className="flex-grow">
							<ViewIcon viewType={view.type}></ViewIcon>
							<ViewLabel>
								{view.title}
							</ViewLabel>
						</ViewItem>
						<ViewButton>
							<FabricIcon name="MoreVertical"></FabricIcon>
						</ViewButton>
						<CloseViewButton view={view}></CloseViewButton>
					</ViewHeader>
					<ViewContent>
						<FileExplorer></FileExplorer>
					</ViewContent>
				</div>
			);
		case ViewTypes.DOCUMENT:
			return (
				<div className="flex-1 flex flex-col max-w-md border-r border-gray-500 dark:border-gray-600">
					<ViewHeader>
						<ViewItem className="flex-grow">
							<ViewIcon viewType={view.type}></ViewIcon>
							<ViewLabel>
								{view.title}
							</ViewLabel>
						</ViewItem>
						<ViewButton>
							<FabricIcon name="View"></FabricIcon>
						</ViewButton>
						<ViewButton>
							<FabricIcon name="Edit"></FabricIcon>
						</ViewButton>
						<ViewButton>
							<FabricIcon name="Game"></FabricIcon>
						</ViewButton>
						<ViewDivider></ViewDivider>
						<ViewButton>
							<FabricIcon name="MoreVertical"></FabricIcon>
						</ViewButton>
						<CloseViewButton view={view}></CloseViewButton>
					</ViewHeader>
					<ViewContent>
						<ErrorBoundary
							fallbackUI={
								<div className="p-12">
									<h2>Critical Error</h2>
									<p>Cannot render {view.contents}</p>
								</div>
							}>
							<Document uuid={view.contents}></Document>
						</ErrorBoundary>
					</ViewContent>
				</div>
			);
		default:
			return <span></span>;
	}
}

function ViewHeader({ children }) {
	return (
		<div className="flex w-full px-3 py-1 items-center text-sm">
			{children}
		</div>
	);
}

function ViewContent({ children }) {
	return (
		<div className="flex-grow overflow-x-hidden overflow-y-auto protean-scrollbar">
			{children}
		</div>
	);
}

function ViewDivider() {
	return (
		<div className="flex h-8 max-h-8 px-2 items-center text-gray-500">
			|
		</div>
	);
}

function ViewItem({ className, children }) {
	return (
		<div className={"flex h-8 max-h-8 px-2 py-1 truncate items-center " + className}>
			{children}
		</div>
	);
}

function ViewButton({ onClick, children }) {
	return (
		<button onClick={onClick} className="acc-focus px-1 hover:raise-10">
			{children}
		</button>
	);
}

function ViewLabel({ children }) {
	return (
		<div className="flex-shrink px-2 truncate font-mono text-important">
			{children}
		</div>
	);
}

function ViewIcon({ viewType }) {
	switch (viewType) {
		case ViewTypes.EXPLORER:
			return (
				<FabricIcon name={ViewIcons.EXPLORER} className="text-important"></FabricIcon>
			);
		case ViewTypes.DOCUMENT:
			return (
				<FabricIcon name={ViewIcons.DOCUMENT} className="text-important"></FabricIcon>
			);
		default:
			return <span></span>;
	}
}

function CloseViewButton({ view }) {
	const { globalState, dispatch } = useGlobalStore();

	const closeView = (view) => {
		dispatch({
			type: "closeView",
			payload: {
				uuid: view.uuid
			}
		})
	}

	return (
		<ViewButton onClick={() => closeView(view)}>
			<FabricIcon name="Cancel"></FabricIcon>
		</ViewButton>
	);
}