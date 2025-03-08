import React, { useState } from 'react';
import { initialStatePlayer } from './../../data/InitialStatePlayer';
import Game from "./Game/Game.tsx";
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
    const [gameStatus, setGameStatus] = useState(false);

    return(
        <div className={styles['menu-box']}>
            <div>
                {gameStatus ?
                    <Game players={initialStatePlayer}/>
                    :
                    <button onClick={() => setGameStatus(true)}>Play</button>
                }
            </div>
        </div>
    );
};

export default Menu;