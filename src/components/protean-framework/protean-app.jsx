import React from 'react';
import { useGlobalStore } from "../stores/global-store";

export default function ProteanApp(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className={globalState.darkMode ? "dark" : ""}>
      <div className="flex w-screen h-screen max-w-screen max-h-screen font-sans font-normal text-base text-proteanGray-800 bg-proteanGray-100 dark:text-proteanGray-200 dark:bg-proteanGray-800 transition-colors duration-75 ease-in-out">
        {props.children}
      </div>
    </div>
  );
}