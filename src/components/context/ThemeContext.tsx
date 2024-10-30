import { createContext } from "react";
import { theme } from "./theme";

interface ThemeContextProviderPropType {
    children: React.ReactNode;
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}:ThemeContextProviderPropType) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}