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
			default:
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
							<ViewContent viewTitle={view.title} tab={getActiveTab(view)}></ViewContent>
						</div>
					</div>
				))
			}
		</div>
	);
}

function ViewContent({ viewTitle, tab }) {
	switch (viewTitle) {
		case 'File Explorer':
			return (
				<FileExplorer></FileExplorer>
			);
		case 'Document View':
			return (
				<ErrorBoundary
					fallbackUI={
						<div className="p-12">
							<h2>Critical Error</h2>
							<p>Cannot render {tab.content}</p>
						</div>
					}>
					<Document uuid={tab.content}></Document>
				</ErrorBoundary>
			);
		default:
			return <span></span>;
	}
}