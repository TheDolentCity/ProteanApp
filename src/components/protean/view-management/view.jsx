import React from 'react'
import { useGlobalStore } from '../../stores/global-store';
import { ViewTypes } from '../../stores/constants';
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
					<div key={view.uuid} className="flex-auto flex flex-col max-w-md border-r border-gray-500 dark:border-gray-600">
						<div className="flex w-full px-3 py-1 items-center">
							<ViewItem>
								<ViewIcon viewType={view.type}></ViewIcon>
								<ViewLabel>
									{view.title}
								</ViewLabel>
							</ViewItem>
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

function ViewItem({ children }) {
	return (
		<div className="flex-shrink flex h-8 max-h-8 px-2 py-1 truncate items-center">
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
		<div className="flex-shrink px-2 truncate text-sm text-important">
			{children}
		</div>
	);
}

function ViewIcon({ viewType }) {
	switch (viewType) {
		case ViewTypes.EXPLORER:
			return (
				<FabricIcon name="FileSystem" className="text-sm text-important"></FabricIcon>
			);
		case ViewTypes.DOCUMENT:
			return (
				<FabricIcon name="Document" className="text-sm text-important"></FabricIcon>
			);
		default:
			return <span></span>;
	}
}