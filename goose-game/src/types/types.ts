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
    totalMoves: number,
    position: number,
    complete: boolean,
    active: boolean,
}

export interface Player {
    name: string,
    figures: Figures[],
    lastRolled: number,
    color: string,
}

export interface PropsPlayerBox {
    name: string,
    figures: Figures[],
    lastRolled: number,
    moves: (indexFigures: number, lastShot: number) => void,
    active: boolean,
    moveFigures: boolean,
    color: string,
    eventHoverFigure: (position: number, index: number, hover: boolean) => void,
}

export interface PlayersList {
    players: Player[],
}

export interface ActiveCell {
    playerIndex: number,
    figureIndex: number,
}

export interface PropsChessBoard {
    activePlayer: number,
    players: Player[],
    hoverFigure: HoverFigure,
    piceDelete: (activeCellList: ActiveCell[]) => void,
}

export interface PropsIconGoose {
    width: number,
    height: number,
    color?: string,
}

export interface StatePlayerActive {
    active: number,
    rollDice: boolean,
    moveFigures: boolean,
}

export interface HoverFigure {
    hover: boolean,
    indexFigure: number,
    position: number,
    positionMove: number,
}

export interface StateEndGame {
    end: boolean,
    winnerName: string,
}

export interface PropsEndGame {
    nameWinner: string,
}