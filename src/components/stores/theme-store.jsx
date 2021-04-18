import React, { createContext, useContext, useState } from 'react';

const initialThemeState = {
  baseColors: 'text-proteanGray-1000 bg-proteanGray-100 dark:text-proteanGray-100 dark:bg-proteanGray-1000',
  appHeaderColors: 'text-proteanGray-700 bg-proteanGray-300 dark:text-proteanGray-300 dark:bg-proteanGray-700',
  commandBarColors: 'text-proteanGray-800 bg-proteanGray-200 dark:text-proteanGray-200 dark:bg-proteanGray-800',
  documentTabColors: 'text-proteanGray-800 bg-proteanGray-200 dark:text-proteanGray-200 dark:bg-proteanGray-800',
  panelColors: 'text-proteanGray-800 bg-proteanGray-200 dark:text-proteanGray-200 dark:bg-proteanGray-800',
  toolPanelColors: 'text-proteanGray-800 bg-proteanGray-200 dark:text-proteanGray-200 dark:bg-proteanGray-800',
  toolPanelItemColors: 'text-proteanGray-800 bg-proteanGray-200 dark:text-proteanGray-200 dark:bg-proteanGray-800',
};
export const ThemeStoreContext = createContext(initialThemeState);

export const ThemeStoreProvider = ({ children }) => {
  const [theme, dispatch] = useState(initialThemeState);

  return (
    <ThemeStoreContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeStoreContext.Provider>
  )
}