import React from 'react';
import { UserProvider } from "../context/UserContext";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch.tsx";

const AppProviders: React.FC = () => {
    return(
        <ThemeProvider>
            <UserProvider>
                <ThemeSwitch/>
            </UserProvider>
        </ThemeProvider>
    )
};

export default AppProviders;