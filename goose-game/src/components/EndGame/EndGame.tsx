import React from 'react';
import {PropsEndGame} from "../../types/types.ts";
import {Link} from "react-router-dom";

const EndGame: React.FC<PropsEndGame> = ({ nameWinner }) => {
    return(
        <>
            <p>Winner player: {nameWinner}</p>
            <Link to='/'>
                <button>Play again</button>
            </Link>
        </>
    )
};

export default EndGame;