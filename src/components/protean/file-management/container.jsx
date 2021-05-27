import React, { useRef, useState } from 'react';
import { Disclosure } from "@headlessui/react";
import { useGlobalStore } from '../../stores/global-store';
import { 
	ContextMenu, 
	ContextMenuDelete, 
	ContextMenuDownload, 
	ContextMenuNewFolder, 
	ContextMenuNewPage, 
	ContextMenuRename, 
	ContextMenuSection 
} from './context-menu';
import Item from './item';
import Rename from './rename';

export function Book({ file, indent, children }) {
  return (
    <Container
      file={file} 
      openIcon="ReadingMode" 
      closedIcon="ReadingMode"
			indent={indent}>
      {children}
    </Container>
  );
}

export function Folder({ file, indent, children }) {
  return (
    <Container
      file={file} 
      openIcon="FabricOpenFolderHorizontal" 
      closedIcon="FabricFolder"
			indent={indent}>
      {children}
    </Container>
  );
}

function Container({ file, openIcon, closedIcon, indent, children }) {
  const itemRef = useRef(null);
  const { globalState, dispatch } = useGlobalStore();
	const [ renaming, setRenaming ] = useState(false);
	
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
					// BUG: FIND WAY TO CLOSE DISCLOSURE WHEN RENAMING
					<Disclosure>
						{({ open }) => (
							<>
							<Disclosure.Button ref={itemRef} className="acc-focus w-full">
								<Item icon={open ? openIcon : closedIcon} indent={indent}>
									{file?.metadata?.title}
								</Item>
							</Disclosure.Button>
							<Disclosure.Panel>
								{children}
							</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				}
				<ContextMenu itemRef={itemRef}>
					<ContextMenuSection>
						<ContextMenuNewPage file={file}></ContextMenuNewPage>
						<ContextMenuNewFolder file={file}></ContextMenuNewFolder>
					</ContextMenuSection>
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