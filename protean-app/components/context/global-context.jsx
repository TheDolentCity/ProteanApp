import React from "react";
import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const globalMachine = Machine(
  {
    id: 'global',
    initial: 'default',
    context: {
      version: undefined,
      files: undefined
    },
    states: {
      default: {
        files: {
          activeConfig: "",
          activeSheet: "carter-guyus.json"
        }
      },
      active: {
        files: {
          activeConfig: "",
          activeSheet: "carter-guyus.json"
        }
      }
    }
  },
  {
    actions: {
      clearFiles: assign({
        files: (_ctx, _evt) => null,
      }),
      setFiles: assign({
        files: (_ctx, evt) => evt.value,
      }),
      setActiveSheet: assign({
        activeSheet: (_ctx, evt) => evt.value,
      })
    },
  }
);

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