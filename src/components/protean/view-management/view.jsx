import React from 'react'
import { useGlobalStore } from '../../stores/global-store';
import Tabs from '../../generic/basic-inputs/tabs';
import ErrorBoundary from '../error-boundary';
import Document from './document';
import FileExplorer from '../file-management/file-explorer';

export function ViewController() {
	const { globalState, dispatch } = useGlobalStore();

	const handleSelectTab = (view, tab) => {
		dispatch({
			type: "selectTab",
			payload: {
				view: view,
				tab: tab
			}
		});
	}

	const handleCloseTab = (view, tab) => {
		switch (view.tabs.length) {
			case 0: throw new Error("Cannot close tab since none exist.");
			// If there's only one tab just close the view
			case 1:
				console.log("CloseView:\n" + JSON.stringify(view, null, 2));
				dispatch({
					type: "closeView",
					payload: {
						view: view
					}
				});
				break;
			default:
				console.log("CloseTab:\n" + JSON.stringify(tab, null, 2));
				dispatch({
					type: "closeTab",
					payload: {
						view: view,
						tab: tab
					}
				});
				break;
		}
	}
	
	const getActiveTab = (view) => {
		return view.tabs.find(tab => tab.active);
	}

	return (
		<div className="flex-grow flex h-full">
			{
				globalState.views.map((view) => (
					<div key={view.uuid} className="flex-auto flex flex-col max-w-md border-r border-gray-500 dark:border-gray-600">
						<Tabs
							tabs={view.tabs}
							group={view.title}
							onSelect={(t) => handleSelectTab(view, t)}
							onClose={(t) => handleCloseTab(view, t)}>
						</Tabs>
						<div className="flex-grow overflow-x-hidden overflow-y-auto scroll-thin">
							<ViewContents viewTitle={view.title} tab={getActiveTab(view)}></ViewContents>
						</div>
					</div>
				))
			}
		</div>
	);
}

function ViewContents({ viewTitle, tab }) {
	switch (viewTitle) {
		case 'File Explorer':
			return (
				<FileExplorer></FileExplorer>
			);
		case 'Document Tabs':
			return (
				<ErrorBoundary
					fallbackUI={
						<div className="p-12">
							<h2>Critical Error</h2>
							<p>Cannot render {tab.contents.uuid}</p>
						</div>
					}>
					<Document uuid={tab.contents.uuid}></Document>
				</ErrorBoundary>
			);
		default:
			return <span></span>;
	}
}