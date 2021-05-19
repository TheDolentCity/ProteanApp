import React, { useRef } from 'react';
import { Disclosure } from "@headlessui/react";
import { ContextMenu } from './context-menu/context-menu';
import ContextMenuDownload from './context-menu/context-menu-download';
import ContextMenuDelete from './context-menu/context-menu-delete';
import Item from './item';
import ContextMenuNewPage from './context-menu/context-menu-new-page';

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
  return (
    <div>
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
      <ContextMenu itemRef={itemRef}>
				<ContextMenuNewPage file={file}></ContextMenuNewPage>
        <ContextMenuDownload file={file}></ContextMenuDownload>
        <ContextMenuDelete file={file}></ContextMenuDelete>
      </ContextMenu>
    </div>
  );
}