import React, { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FileTypes, ViewTypes, Directions } from './constants';
import { VirtualFileSystem, VirtualFile } from './virtual-file-system';

const CharacterSheets = new VirtualFile(
	{
		type: "PAGE",
		title: "Character Sheets",
	},
`
# Character Sheets
This is an overview of how character sheets function in the Protean App so that you understand how to use them to play Protean RPG.

## Widgets
The components that make up character sheets are called widgets. These are little pieces of functionality. For example, there is a widget to add additional blocks (we'll get to that) to your character sheet.
`
);

const TestPage = new VirtualFile(
	{
		type: "PAGE",
		title: "Test Page",
	},
`
# Header 1
This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.

## Header 2
This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.

<Columns count="2">

## Header 2 w/ 2 columns
This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.

</Columns>

<Columns count="3">

### Header 3 w/ 3 columns
This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.

</Columns>
`
);

const ProteanApp = new VirtualFile(
	{
		type: "BOOK",
		title: "Protean App"
	},
`
# Protean App
This is a file
`
);

function loadLocalStorage(key, defaultValue) {
	return localStorage.getItem(key) === null ? defaultValue : JSON.parse(localStorage.getItem(key));
}

// Gets all of the files needed for the application to run.
// This returns the built in files, local files, or the combination of the two.
function getFileSystem() {
	// // Get all files that have been saved to local storage
	// var localFiles = loadLocalStorage("files", null);
	// console.log("getFiles:LocalFilesNames:\n" + JSON.stringify(localFiles?.map(file => file.uuid)));

	// // Return the built in files if there are none in local storage
	// if (localFiles === null) {
	//   console.log("getFiles:BuiltInFilesNames:" + JSON.stringify([...Object.values(BuiltInFiles)]?.map(file => file.uuid)));
	//   return [...Object.values(BuiltInFiles)];
	// }
	// // Return built in files and local storage files
	// else {
	//   console.log("getFiles:BuiltInFilesNames+LocalFilesNames:" + JSON.stringify([...Object.values(BuiltInFiles), ...localFiles]?.map(file => file.uuid)));
	//   // console.log("getFiles:LocalFilesNames:" + JSON.stringify([...localFiles]));
	//   return [...Object.values(BuiltInFiles), ...localFiles];
	// }
	var fileSystem = new VirtualFileSystem();
	fileSystem.addFile(ProteanApp);
	fileSystem.addFile(CharacterSheets, ProteanApp.uuid);
	fileSystem.addFile(TestPage, ProteanApp.uuid);
	fileSystem.print();
	return fileSystem;
}

const GlobalStoreContext = createContext();
const initialGlobalState = {
	darkMode: loadLocalStorage("darkMode", false),
	views: [
		{
			'uuid': uuidv4(),
			'type': ViewTypes.EXPLORER,
			'title': 'File Explorer',
			'contents': {
				
			}
		}
	],
	fileSystem: getFileSystem()
};

const reducer = (globalState, action) => {
	switch (action.type) {
		case "setMode":
			return {
				...globalState,
				mode: action?.payload.mode
			}
		case "setDarkMode":
			localStorage.setItem("darkMode", action?.payload.darkMode);
			return {
				...globalState,
				darkMode: action?.payload.darkMode
			}
		case "openView":
			if (ViewTypes[action.payload.type] === undefined) {
				throw new Error("View type " + action.payload.type + " does not exist.");
			}
			return {
				...globalState,
				views: [...globalState.views, {
					uuid: uuidv4(),
					type: ViewTypes[action.payload.type],
					title: action.payload.title,
					contents: action.payload.contents
				}]
			}
		case "closeView":
			return {
				...globalState,
				views: [...globalState.views.filter(view => view.uuid !== action.payload.uuid)]
			}
		case "moveView":
			var viewsCopy = [ ...globalState.views ];
			var index = viewsCopy.findIndex(v => v.uuid === action.payload.view.uuid);
			var temp = null;
			switch (action.payload.direction) {
				case Directions.LEFT:
					switch (index) {
						case -1: throw new Error("Cannot find view to move.");
						case 0:
							temp = viewsCopy.shift();
							viewsCopy.push(temp);
							break;
						default:
							temp = viewsCopy[index-1];
							viewsCopy[index-1] = viewsCopy[index];
							viewsCopy[index] = temp;
							break;
					}
					break;
				case Directions.RIGHT:
					switch (index) {
						case -1: throw new Error("Cannot find view to move.");
						case viewsCopy.length-1:
							temp = viewsCopy.pop();
							viewsCopy.unshift(temp);
							break;
						default:
							temp = viewsCopy[index+1];
							viewsCopy[index+1] = viewsCopy[index];
							viewsCopy[index] = temp;
							break;
					}
					break;
				default: 
					throw new Error("Cannot move view in the given direction: " + action.payload.direction);
			}
			return {
				...globalState,
				views: viewsCopy
			}
		case "openFile":
			var viewIndex = globalState.views.map(view => view.type).indexOf(ViewTypes.DOCUMENT);
			if (viewIndex === -1) {
				return {
					...globalState,
					views: [
						...globalState.views, {
							uuid: uuidv4(),
							type: ViewTypes.DOCUMENT,
							title: action.payload.file.metadata.title,
							contents: action.payload.file.uuid
						}
					]
				}
			}
			else {
				var documentView = globalState.views[viewIndex];
				documentView.title = action.payload.file.metadata.title;
				documentView.contents = action.payload.file.uuid;
				var viewCopy = [...globalState.views];
				viewCopy[viewIndex] = documentView;
				return {
					...globalState,
					views: viewCopy
				}
			}
		case "uploadFile":
			const uploadFile = { ...action?.payload.file };
			while (globalState.fileSystem.containsFile(uploadFile)) {
				console.log(`Existing file with uuid '${uploadFile?.uuid}' exists.`);
				console.log(`Renaming new file...`);
				uploadFile.uuid = uuidv4();
				console.log(`Renamed new file to '${uploadFile.uuid}'`);
			}
			globalState.fileSystem.addFile(uploadFile);
			return {
				...globalState
			}
		case "newFile":
			var newFile = new VirtualFile(
				{
					type: action?.payload.fileType,
					title: 'untitled'
				},
				null
			);
			
			// Update content based on document type
			switch (action?.payload.fileType) {
				case FileTypes.BOOK:
					newFile.content = '';
					break;
				case FileTypes.FOLDER:
					newFile.content = '';
					break;
				case FileTypes.PAGE:
					newFile.content = '';
					break;
				case FileTypes.SHEET:
					newFile.content = [];
					break;
				default:
					newFile.content = '';
					break;
			}

			console.log("NewFile:\n" + JSON.stringify(newFile, null, 2));

			// Add file to the system taking parent into account
			if (action.payload.parentFile) {
				globalState.fileSystem.addFile(newFile, action.payload.parentFile.uuid);
				globalState.fileSystem.print();
			}
			else {
				globalState.fileSystem.addFile(newFile);
			}
			return {
				...globalState
			}
		case "updateFile":
			// Update file
			globalState.fileSystem.setFile(action.payload.file);
			
			// Update view title if necessary
			var view = globalState.views.find(view => view.contents === action.payload.file.uuid);
			if (view) {
				view.title = action.payload.file.metadata?.title;
			}
			
			return {
				...globalState
			}
		case "deleteFile":
			// Don't delete built in files
			// if (isNotBuiltInFile(action?.payload.file?.uuid) == false) {
			// 	console.log("Error: Cannot delete built in file.");
			// 	return { ...globalState };
			// }

			// // Remove the file from the arrays
			// console.log("deleteFile:originals:\n" + JSON.stringify(globalState?.files.map(f => f.uuid)));
			// const files = globalState?.files.filter((file) => action?.payload.file?.uuid !== file.uuid);
			// console.log("deleteFile:afterDelete:\n" + JSON.stringify(files.map(f => f.uuid)));

			// Save the new list of files in local storage
			// saveNonBuiltInFiles(files);

			// Delete the file from the system
			globalState.fileSystem.deleteFile(action.payload.file);

			return {
				...globalState,
				views: globalState.views.filter(view => view.type !== ViewTypes.DOCUMENT || globalState.fileSystem.getFileNode(view.contents))
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

export const GlobalStoreProvider = ({ children }) => {
	const [globalState, dispatch] = useReducer(reducer, initialGlobalState);

	return (
		<GlobalStoreContext.Provider value={{ globalState, dispatch }}>
			{children}
		</GlobalStoreContext.Provider>
	)
}

export const useGlobalStore = () => useContext(GlobalStoreContext);