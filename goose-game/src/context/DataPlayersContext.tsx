import React, {createContext, ReactNode, useState} from 'react';
import {DataPlayersContextType} from "../types/types.ts";

export const DataPlayersContext = createContext<DataPlayersContextType | undefined>(undefined);

export const DataPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [quantityPlayers, setQuantityPlayers] = useState(0);

    const getNumberPlayers = (quantity: number) => {
        setQuantityPlayers(quantity);
    }

    return(
        <DataPlayersContext.Provider value={{ quantityPlayers,  getNumberPlayers}}>
            {children}
        </DataPlayersContext.Provider>
    )
}