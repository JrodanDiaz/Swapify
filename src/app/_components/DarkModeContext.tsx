'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';

interface DarkModeContextType {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
  }

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
  
    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
  };

export function UseDarkModeContext() {
    const DarkMode = useContext(DarkModeContext)

    if (DarkMode === undefined) {
        throw new Error("UseDarkModeContext must be used with a DarkModeContext")
    }

    return DarkMode
}