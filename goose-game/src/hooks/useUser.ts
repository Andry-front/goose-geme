import { useContext } from "react";
import { UserContextType } from './../types/types';
import { UserContext } from './../context/UserContext';

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser должен использоваться внутри UserProvider');
    }

    return context;
};