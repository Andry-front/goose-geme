import React, { useState } from 'react';
import { initialStatePlayer } from './../../data/InitialStatePlayer';
import MovesTracker from "../../components/MovesTracker/MovesTracker";
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
    const [gameStatus, setGameStatus] = useState(false);

    return(
        <div className={styles['menu-box']}>
            <div>
                {gameStatus ?
                    <MovesTracker players={initialStatePlayer}/> :
                    <button onClick={() => setGameStatus(true)}>Play</button>
                }
            </div>
        </div>
    );
};

export default Menu;