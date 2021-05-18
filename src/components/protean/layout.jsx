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
    <div className={"antialiased text-black bg-gray-50 dark:text-gray-100 dark:bg-black transition-colors duration-75 ease-in-out " + className}>
      {children}
    </div>
  );
}

export function Sidebar(props) {
  return (
    <div className="flex-none flex flex-col h-full sm:w-56 md:w-96 overflow-y-auto scroll-thin bg-gray-200 dark:bg-gray-900">
      {props.children}
    </div>
  );
}