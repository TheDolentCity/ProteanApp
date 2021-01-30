import React from "react";
import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const globalMachine = Machine({
  id: 'global',
  initial: 'default',
  context: {
    storage: undefined
  },
  states: {
    default: {
      files: {
        activeConfig: "",
        activeSheet: ""
      }
    }
  }
});

export default function GlobalContextProvider(props) {
  const [current, send] = useMachine(globalMachine);
  return (
    <GlobalStateContext.Provider value={current}>
      <GlobalDispatchContext.Provider value={send}>
        {props.children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};