import React from 'react';
import { Disclosure } from "@headlessui/react";
import Item from './item';

export function Book({ fileName, children }) {
  return (
    <Container 
      containerName={fileName} 
      openIcon="ReadingMode" 
      closedIcon="ReadingMode">
      {children}
    </Container>
  );
}

export function Folder({ fileName, children }) {
  return (
    <Container 
      containerName={fileName} 
      openIcon="FabricOpenFolderHorizontal" 
      closedIcon="FabricFolder">
      {children}
    </Container>
  );
}

function Container({ containerName, openIcon, closedIcon, children }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
        <Disclosure.Button className="acc-focus w-full">
          <Item icon={open ? openIcon : closedIcon}>
            {containerName}
          </Item>
        </Disclosure.Button>
        <Disclosure.Panel className="ml-4 pl-3 border-l border-dashed border-theme">
          {children}
        </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}