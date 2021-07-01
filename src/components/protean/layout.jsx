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
    <div className="flex w-screen h-screen max-w-screen max-h-screen overflow-x-hidden ">
      {children}
    </div>
  );
}

export function ColorContainer({ className, children }) {
  return (
    <div className={"antialiased text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-900 transition-colors duration-100 ease-in-out " + className}>
      {children}
    </div>
  );
}

export function Sidebar(props) {
  return (
    <div className="flex-none flex flex-col h-full sm:w-56 md:w-96 overflow-y-auto scroll-thin border-l border-r border-gray-500 dark:border-gray-600">
      {props.children}
    </div>
  );
}