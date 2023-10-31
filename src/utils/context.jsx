'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogoInView, setIsLogoInView] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isLogoInView,
        setIsLogoInView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
