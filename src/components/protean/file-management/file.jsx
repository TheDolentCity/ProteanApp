import React, { useRef, useState } from 'react';
import { useGlobalStore } from '../../stores/global-store';
import { 
	ContextMenu, 
	ContextMenuDelete, 
	ContextMenuDownload, 
	ContextMenuRename, 
	ContextMenuSection 
} from './context-menu';
import Item from './item';
import Rename from './rename';

export default function File({ file, indent }) {
  const itemRef = useRef(null);
  const { globalState, dispatch } = useGlobalStore();
	const [ renaming, setRenaming ] = useState(false);

  const openFileDispatch = () => {
    dispatch({
      type: "openFile",
      payload: {
        file: file
      }
    });
  }

	if (file !== null && file !== undefined) {
		return (
			<div>
				{
					renaming && (file?.metadata?.title !== null || file?.metadata?.title !== undefined) ?
					<Rename 
						file={file} 
						icon={globalState.fileIcons[file.metadata.type]} 
						indent={indent} 
						endRename={() => setRenaming(false)}>
					</Rename>
					:
					<Item
						active={globalState?.activeFile?.uuid === file.uuid}
						icon={globalState.fileIcons[file.metadata.type]}
						indent={indent}
						itemRef={itemRef}
						onClick={openFileDispatch}>
						{file.metadata.title}
					</Item>
				}
				<ContextMenu itemRef={itemRef}>
					<ContextMenuSection>
						<ContextMenuRename onClick={() => setRenaming(true)}></ContextMenuRename>
						<ContextMenuDownload file={file}></ContextMenuDownload>
						<ContextMenuDelete file={file}></ContextMenuDelete>
					</ContextMenuSection>
				</ContextMenu>
			</div>
		);
	}
	else return <span></span>;
}