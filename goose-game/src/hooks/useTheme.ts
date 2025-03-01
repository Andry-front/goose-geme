import { useContext } from "react";
import { ThemeContextType } from './../types/types';
import { ThemeContext } from './../context/ThemeContext';

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme должен использоваться внутри ThemeProvider')
    }

    return context;
};