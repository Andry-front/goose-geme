import React from "react";

export interface ExampleProps {
    title: string
}

export interface User {
    id: number;
    name: string;
}

export interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export interface Figures {
    id: number,
    movesLeft: number,
    position: number,
    complete: boolean,
    active: boolean,
}

export interface Player {
    name: string,
    figures: Figures[],
    lastRolled: number,
}

export interface PropsPlayerBox {
    name: string,
    figures: Figures[],
    lastRolled: number,
}

export interface PlayersList {
    players: Player[],
}