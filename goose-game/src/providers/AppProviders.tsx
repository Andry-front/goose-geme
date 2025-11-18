import React from 'react';
import { ThemeProvider } from "../context/ThemeContext";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch.tsx";
import {DataPlayerProvider} from "../context/DataPlayersContext.tsx";

const AppProviders: React.FC = () => {
    return(
        <ThemeProvider>
            <DataPlayerProvider>
                <ThemeSwitch/>
            </DataPlayerProvider>
        </ThemeProvider>
    )
};

export default AppProviders;