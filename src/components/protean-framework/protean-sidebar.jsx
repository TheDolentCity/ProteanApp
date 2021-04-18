import React from 'react';
import ProteanControlsTool from './protean-tools/protean-controls-tool';
import ProteanDarkToggle from './protean-tools/protean-dark-toggle';
import ProteanFilesTool from "./protean-tools/protean-files-tool";
import ProteanPagesTool from './protean-tools/protean-pages-tool';

export function ProteanLeftSidebar() {
  return (
    <ProteanSidebar>
      <ProteanControlsTool></ProteanControlsTool>
      <ProteanFilesTool></ProteanFilesTool>
    </ProteanSidebar>
  );
}

export function ProteanRightSidebar() {
  return (
    <ProteanSidebar>
      <ProteanPagesTool></ProteanPagesTool>
    </ProteanSidebar>
  );
}

function ProteanSidebar(props) {
  return (
    <div className="flex-none flex flex-col z-30 w-52 xl:w-72 overflow-y-auto bg-darken-5 dark:bg-darken-25">
      {props.children}
    </div>
  );
}