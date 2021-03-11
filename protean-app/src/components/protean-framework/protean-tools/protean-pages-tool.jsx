import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import ProteanTool, { ProteanToolButton } from "./protean-tool";
import FabricIcon from "../../generic/icons/fabric-icon";

export default function ProteanPagesTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activePageDispatch(Page) {
    return {
      type: "setActivePage",
      payload: {
        activePage: Page
      }
    }
  }

  return (
    <ProteanTool toolName="Pages">
      {
        globalState?.activeFile?.type == "BOOK" 
        ?
        globalState?.activeFile?.content.map(page => (
          <ProteanPageButton key={page.uuid} onClick={() => dispatch(activePageDispatch(page))}>
            {page.title}
          </ProteanPageButton>
        ))
        :
        <span></span>
      }
    </ProteanTool>
  );
}

function ProteanPageButton(props) {
  return (
    <button onClick={props.onClick} className="acc-btn flex w-full mx-auto px-4 py-1 space-x-2 items-center rounded text-base hover:elevation-10">
      <FabricIcon name={props.icon}></FabricIcon>
      <span className="text-xs">{props.children}</span>
    </button>
  );
}