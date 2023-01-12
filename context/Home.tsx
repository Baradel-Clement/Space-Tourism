import React, { createContext, useContext, useState } from 'react';
import { HomeContextType } from '../interfaces';

type HomeContextProviderProps = {
  children: React.ReactNode;
}

export const HomeContext = createContext({} as HomeContextType)

export const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
      }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeStateContext = () => useContext(HomeContext);