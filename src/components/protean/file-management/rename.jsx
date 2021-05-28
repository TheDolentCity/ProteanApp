import React, { useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';

export default function Rename({ file, icon, indent, endRename}) {
  const { globalState, dispatch } = useGlobalStore();
	const [ fileName, setFileName ] = useState(file.metadata.title);

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
					updateFile: newFile
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
		<RenameContainer indent={indent} className="text-sm">
			<Icon icon={icon}></Icon>
			<RenameInput fileName={fileName} setFileName={setFileName}></RenameInput>
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
			className={"acc-focus flex w-full h-7 px-3 py-1 items-center text-left overflow-hidden " + className}
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

function RenameInput({ fileName, setFileName }) {
	return (
		<input 
			type="text"
			className="input-text-visible flex-grow py-1 text-sm"
			placeholder=""
			value={fileName}
			onChange={e => setFileName(e.target.value)}/>
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