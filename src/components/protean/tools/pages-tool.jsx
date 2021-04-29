import React, { useState } from 'react';
import { useGlobalStore } from "../../stores/global-store";
import Tool, { ToolRow, ToolButton } from "./tool";
import FabricIcon from "../../generic/basic-inputs/fabric-icon";

export default function PagesTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activePageDispatch(index) {
    return {
      type: "setActivePage",
      payload: {
        activePage: index
      }
    }
  }

  if (globalState?.activeFile?.metadata?.type === "BOOK") {
    return (
      <Tool header="Pages">
        {
          globalState?.activeFile?.content.map((page, i) => (
            <ToolRow key={page.uuid}>
              <ToolButton
                key={page.uuid}
                icon={globalState.fileIcons[page.metadata.type]}
                onClick={() => dispatch(activePageDispatch(i))}
                active={globalState?.activeFile?.metadata.activePage === i}>
                {page.metadata.title}
              </ToolButton>
            </ToolRow>
          ))
        }
      </Tool>
    );
  }
  else return (
    <div></div>
  );
}