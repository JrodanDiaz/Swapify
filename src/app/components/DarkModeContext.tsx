import { createContext, useContext, Dispatch, SetStateAction } from 'react';

interface DarkModeContextType {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
  }

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function UseDarkModeContext() {
    const DarkMode = useContext(DarkModeContext)

    if (DarkMode === undefined) {
        throw new Error("UseDarkModeContext must be used with a DarkModeContext")
    }

    return DarkMode
}