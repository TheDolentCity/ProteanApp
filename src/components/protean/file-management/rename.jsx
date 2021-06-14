import React, { useEffect, useState, useRef } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';

export default function Rename({ file, icon, indent, endRename }) {
	const { globalState, dispatch } = useGlobalStore();
	const [fileName, setFileName] = useState(file.metadata.title);
	const renameInput = useRef(null);

	// Constructor
	useEffect(() => {
		// Focus input when the Rename component is created
		renameInput.current.focus();

		// Define methods for submitting rename
		const submitRename = ({ key }) => {
			if (key === "Enter" && fileName !== "") {
				if (fileName === undefined) {
					console.log(`fileName is undefined on Rename object.`);
				}
				else {
					let newFile = { ...file };
					newFile.metadata.title = fileName;
					dispatch({
						type: "updateFile",
						payload: {
							file: newFile
						}
					});
				}
				endRename();
			}
			else if (key === "Escape") {
				endRename();
			}
		}

		// Set up event listeners for 
		renameInput.current.addEventListener('keyup', submitRename);

    return function cleanup() {
			renameInput.current.removeEventListener('keyup', submitRename);
    }
	});

	const updateFileDispatch = () => {
		if (fileName === undefined) {
			console.log(`fileName is undefined on Rename object.`);
		}
		else {
			let newFile = { ...file };
			newFile.metadata.title = fileName;
			dispatch({
				type: "updateFile",
				payload: {
					file: newFile
				}
			});
		}
	}

	const validFileName = () => {
		if (fileName === "") {
			return false;
		}
		return true;
	}

	const onAccept = () => {
		if (validFileName()) {
			updateFileDispatch();
			endRename();
		}
	}

	return (
		<RenameContainer indent={indent} className="text-base">
			<Icon icon={icon}></Icon>
			<RenameInput inputRef={renameInput} fileName={fileName} onChange={setFileName}></RenameInput>
			<RenameButton onClick={onAccept} icon="Accept"></RenameButton>
			<RenameButton onClick={endRename} icon="Cancel"></RenameButton>
		</RenameContainer>
	);
}

function RenameContainer({ indent, className, children }) {
	const createIndentation = () => {
		if (indent === -1) {
			return {
				"paddingLeft": "0.75rem"
			}
		}
		return {
			"paddingLeft": (2.0 + (indent * 1.75)) + "rem"
		};
	}

	return (
		<div
			className={"acc-focus flex w-full px-3 items-center text-left overflow-hidden " + className}
			style={createIndentation()}>
			{children}
		</div>
	);
}

function Icon({ icon, className }) {
	return (
		<div className={"flex pr-1 items-center " + className}>
			<FabricIcon name={icon} className="text-theme"></FabricIcon>
		</div>
	);
}

function RenameInput({ inputRef, fileName, onChange }) {
	return (
		<input
			ref={inputRef}
			type="text"
			className="input-text-visible flex-grow py-1"
			placeholder=""
			value={fileName}
			onChange={e => onChange(e.target.value)} />
	);
}

function RenameButton({ onClick, icon, className }) {
	return (
		<button onClick={onClick} className={"acc-input flex flex-none px-2 py-1 items-center hover:raise-5 " + className}>
			<FabricIcon name={icon} className="text-theme"></FabricIcon>
		</button>
	);
}

RenameContainer.defaultProps = {
	indent: -1,
	className: "text-sm"
};