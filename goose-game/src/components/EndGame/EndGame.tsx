import React from 'react';
import {PropsEndGame} from "../../types/types";
import {Link} from "react-router-dom";
import styles from './EndGame.module.scss';

const EndGame: React.FC<PropsEndGame> = ({ nameWinner }) => {
    return(
        <div className={styles['end-game-wrapper']}>
            <p>Winner player: {nameWinner}</p>
            <Link to='/'>
                <button>Play again</button>
            </Link>
        </div>
    )
};

export default EndGame;