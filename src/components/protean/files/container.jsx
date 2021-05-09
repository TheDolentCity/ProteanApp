import React, { useRef } from 'react';
import { Disclosure } from "@headlessui/react";
import { ContextMenu } from './context-menu/context-menu';
import ContextMenuDownload from './context-menu/context-menu-download';
import ContextMenuDelete from './context-menu/context-menu-delete';
import Item from './item';

export function Book({ file, children }) {
  return (
    <Container
      file={file} 
      openIcon="ReadingMode" 
      closedIcon="ReadingMode">
      {children}
    </Container>
  );
}

export function Folder({ file, children }) {
  return (
    <Container
      file={file} 
      openIcon="FabricOpenFolderHorizontal" 
      closedIcon="FabricFolder">
      {children}
    </Container>
  );
}

function Container({ file, openIcon, closedIcon, children }) {
  const itemRef = useRef(null);
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
          <Disclosure.Button ref={itemRef} className="acc-focus w-full">
            <Item icon={open ? openIcon : closedIcon}>
              {file?.metadata?.title}
            </Item>
          </Disclosure.Button>
          <Disclosure.Panel className="ml-4 pl-3 border-l border-dashed border-theme">
            {children}
          </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <ContextMenu itemRef={itemRef}>
        <ContextMenuDownload file={file}></ContextMenuDownload>
        <ContextMenuDelete file={file}></ContextMenuDelete>
      </ContextMenu>
    </div>
  );
}