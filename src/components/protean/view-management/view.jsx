import React from 'react'
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import { useGlobalStore } from '../../stores/global-store';
import ErrorBoundary from '../error-boundary';
import Document from './document';

export function ViewController() {
  const { globalState, dispatch } = useGlobalStore();

	const closeView = (file) => {
		dispatch({
      type: "closeFile",
      payload: {
        file: file
      }
    });
	}

	console.log("ViewController:openFiles:\n" + JSON.stringify(globalState.openFiles, null, 2));

	return (
		<div className="flex-grow flex h-full">
			{
				globalState.openFiles.map((file) => (
					<View key={file.uuid} file={file} closeView={() => closeView(file)}></View>
				))
			}
		</div>
	);
}

function View({ file, closeView }) {
	return (
		<div className="flex-1 flex flex-col max-w-md border-r border-gray-500 dark:border-gray-600">
			<ViewTab title={file.metadata.title} closeTab={closeView}></ViewTab>
			<div className="flex-grow overflow-x-hidden overflow-y-auto scroll-thin">
				<ErrorBoundary
					fallbackUI={
						<div className="p-12">
							<h2>Critical Error</h2>
							<p>Cannot render {file.uuid}</p>
						</div>
					}>
					<Document uuid={file.uuid}></Document>
				</ErrorBoundary>
			</div>
		</div>
	);
}

function ViewTab({ title, closeTab }) {
	return (
		<div className="flex px-2 py-1 items-center border-b border-gray-500 dark:border-gray-600">
			<h5 className="flex-grow pl-2 leading-none">
				{title}
			</h5>
			<button onClick={closeTab} className="acc-focus px-1 justify-self-end hover:raise-10">
				<FabricIcon name="Cancel" className="h-6"></FabricIcon>
			</button>
		</div>
	);
}

function ViewDocument() {

}