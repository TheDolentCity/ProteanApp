import React from 'react';
import { useGlobalStore } from "../stores/global-store";

export default function ProteanApp(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className={globalState.darkMode ? "dark" : ""}>
      <div className="flex w-screen h-screen max-w-screen max-h-screen font-sans text-gray-800 bg-gray-100 dark:text-gray-200 dark:bg-gray-800">
        {props.children}
      </div>
    </div>
  );
}