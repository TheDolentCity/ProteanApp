import React from 'react';
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { GlobalStateContext, GlobalDispatchContext } from "../context/global";
import ActionBlockPanel from '../protean-rpg/action-block'

const sheetMachine = Machine({
  id: "sheet",
  initial: "empty",
  context: {
    sheet: undefined,
  },
  states: {
    empty: {
      
    }
  }
});

export default function Sheet(props) {
  // Access the global state
  var globalState = React.useContext(GlobalStateContext);

  // Gets the active sheet from global storage
  function getActiveSheet() {
    // Check if data exists
    if (globalState.context.storage === undefined || globalState.context.storage.files === undefined) {
      setState({
        sheet: undefined
      });
    }

    // Find the active sheet
    for (var i = 0; i < globalState.context.storage?.files?.size; i++) {
      if (globalState.context.storage?.files[i].filename == globalState.states.active.files.activeSheet) {
        setState({
          sheet: globalState.context.storage?.files[i]
        });
      }
    }
  };

  getActiveSheet();

  return (
    <div className="">
      <h1>
        {state.sheet?.filedata?.name}
      </h1>
      <p>
        {state.sheet?.filedata?.description}
      </p>
      <div className="w-full space-y-6">
        <ActionBlockPanel 
          actionBlocks={state.sheet?.filedata?.actionBlocks}>
        </ActionBlockPanel>
      </div>
    </div>
  );
}