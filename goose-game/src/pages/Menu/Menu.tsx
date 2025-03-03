import React, { useState } from 'react';
import { initialStatePlayer } from './../../data/InitialStatePlayer';
import MovesTracker from "../../components/MovesTracker/MovesTracker";

const Menu: React.FC = () => {
    const [gameStatus, setGameStatus] = useState(false);

    return(
        <div>
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