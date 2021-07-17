import React, { useRef, useState } from 'react';
import { Disclosure } from "@headlessui/react";
import { useGlobalStore } from '../../storage/global-store';
import { 
	ContextMenu, 
	ContextMenuDelete, 
	ContextMenuDownload, 
	ContextMenuNewFolder, 
	ContextMenuNewPage,
	ContextMenuOpenToTheSide, 
	ContextMenuRename, 
	ContextMenuSection 
} from './context-menu';
import Item, { ItemIcon, ItemContent } from './item';
import Rename from './rename';
import { FileIcons } from '../../storage/constants';

export function Book({ file, indent, children }) {
  return (
    <Container
      file={file} 
      openIcon="ReadingModeSolid" 
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
				<Disclosure>
					{({ open }) => (
						<>
						{
							renaming && (file?.metadata?.title !== null || file?.metadata?.title !== undefined) 
							?
							<Rename 
								file={file} 
								icon={FileIcons[file.metadata.type]} 
								indent={indent} 
								endRename={() => setRenaming(false)}>
							</Rename>
							:
							<>
								<Disclosure.Button className="acc-focus absolute align-middle h-7">
									<ItemIcon icon={open ? "ChevronDown" : "ChevronRight"} indent={indent}></ItemIcon>
								</Disclosure.Button>
								<Item active={globalState.views.find(v => v.contents === file.uuid)} indent={indent} itemRef={itemRef} onClick={openFileDispatch}>
									<ItemIcon icon={open ? openIcon : closedIcon} className="ml-6"></ItemIcon>
									<ItemContent>
										{file?.metadata?.title}
									</ItemContent>
								</Item>
							</>
						}
						<Disclosure.Panel>
							{children}
						</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<ContextMenu itemRef={itemRef}>
					<ContextMenuSection>
						<ContextMenuNewPage file={file} />
						<ContextMenuNewFolder file={file} />
					</ContextMenuSection>
					<ContextMenuSection>
						<ContextMenuOpenToTheSide file={file} />
					</ContextMenuSection>
					<ContextMenuSection>
						<ContextMenuRename onClick={() => setRenaming(true)} />
						<ContextMenuDownload file={file} />
						<ContextMenuDelete file={file} />
					</ContextMenuSection>
				</ContextMenu>
			</div>
		);
	}
	else return <span></span>;
}