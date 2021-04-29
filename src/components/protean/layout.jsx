import React from 'react';
import { useGlobalStore } from "../stores/global-store";

export default function AppLayout(props) {
  return (
    <DarkContainer>
      <ColorContainer>
        <AppContainer>
          {props.children}
        </AppContainer>
      </ColorContainer>
    </DarkContainer>
  );
}

export function DarkContainer({ children }) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className={globalState.darkMode ? "dark" : ""}>
      {children}
    </div>
  );
}

export function AppContainer({ children }) {
  return (
    <div className="flex w-screen h-screen max-w-screen max-h-screen">
      {children}
    </div>
  );
}

export function ColorContainer({ className, children }) {
  return (
    <div className={"text-gray-600 bg-gray-200 dark:text-gray-400 dark:bg-gray-900 transition-colors duration-75 ease-in-out " + className}>
      {children}
    </div>
  );
}

export function Sidebar(props) {
  return (
    <div className="flex-none flex flex-col z-30 w-72 mx-12 pt-20 overflow-y-auto">
      {props.children}
    </div>
  );
}