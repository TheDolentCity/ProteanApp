import React, { createContext, useContext, useState } from 'react';

const initialThemeState = {
  baseColors: 'text-gray-1000 bg-gray-100 dark:text-gray-100 dark:bg-gray-1000',
  appHeaderColors: 'text-gray-700 bg-gray-300 dark:text-gray-300 dark:bg-gray-700',
  commandBarColors: 'text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800',
  documentTabColors: 'text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800',
  panelColors: 'text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800',
  toolPanelColors: 'text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800',
  toolPanelItemColors: 'text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800',
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