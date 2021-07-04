import React from 'react'
import { useGlobalStore } from '../../stores/global-store';
import { ViewTypes } from '../../stores/constants';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import ErrorBoundary from '../error-boundary';
import Document from './document';
import FileExplorer from '../file-management/file-explorer';

export function ViewController() {
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
		<div className="flex-grow flex h-full">
			{
				globalState.views.map((view) => (
					<div key={view.uuid} className="flex-auto flex flex-col max-w-md border-r border-gray-500 dark:border-gray-600">
						<div className="flex w-full px-3 py-1 space-x-2 items-center">
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
							<ViewButton>
								<FabricIcon name="MoreVertical"></FabricIcon>
							</ViewButton>
							<ViewButton onClick={() => closeView(view)}>
								<FabricIcon name="Cancel"></FabricIcon>
							</ViewButton>
						</div>
						<div className="flex-grow overflow-x-hidden overflow-y-auto protean-scrollbar">
							<ViewContent view={view}></ViewContent>
						</div>
					</div>
				))
			}
		</div>
	);
}

function ViewContent({ view }) {
	switch (view.type) {
		case ViewTypes.EXPLORER:
			return (
				<FileExplorer></FileExplorer>
			);
		case ViewTypes.DOCUMENT:
			return (
				<ErrorBoundary
					fallbackUI={
						<div className="p-12">
							<h2>Critical Error</h2>
							<p>Cannot render {view.contents.uuid}</p>
						</div>
					}>
					<Document uuid={view.contents.uuid}></Document>
				</ErrorBoundary>
			);
		default:
			return <span></span>;
	}
}

function ViewItem({ className, children }) {
	return (
		<div className={"flex h-8 max-h-8 px-2 py-1 truncate items-center text-sm " + className}>
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
		<div className="flex-shrink px-2 truncate text-important">
			{children}
		</div>
	);
}

function ViewIcon({ viewType }) {
	switch (viewType) {
		case ViewTypes.EXPLORER:
			return (
				<FabricIcon name="FileSystem" className="text-important"></FabricIcon>
			);
		case ViewTypes.DOCUMENT:
			return (
				<FabricIcon name="Document" className="text-important"></FabricIcon>
			);
		default:
			return <span></span>;
	}
}