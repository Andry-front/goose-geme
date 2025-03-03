import React, { useState } from 'react';
import { PlayersList } from "../../types/types";
import { RandomInteger } from "../../utils/Functions";
import PlayerBox from "../PlayerBox/PlayerBox";
import styles from './MovesTracker.module.scss';

const MovesTracker: React.FC<PlayersList> = ({ players }) => {
    const [ playersState, setPlayersState] = useState(players);

    const startPlayer = RandomInteger(0, players.length - 1);

    const [ playerActive, setPlayerActive ] = useState<number>(startPlayer);

    const rollDice = (index: number) => {
        const newPlayers = [...playersState],
            nextPlayer = index + 1,
            activeNumber =
                nextPlayer > (playersState.length - 1) ?
                    0 :
                    nextPlayer;

        const resultDice = RandomInteger(1, 6);

        const eventActiveFigure = (active: number, players: any) => {
            console.log(active);
            console.log(players[active]);
        }

        if (resultDice === 6) {
            eventActiveFigure(playerActive, newPlayers);
        } else {
            setPlayerActive(activeNumber);
        }

        newPlayers[index].lastRolled = resultDice;

        setPlayersState(newPlayers);
    };


    return(
        <div className={styles['tracker-wrapper']}>
            <>{playersState.map((item, index) => (
                <div className={styles['tracker-list']} key={index}>
                    <PlayerBox
                        name={item.name}
                        figures={item.figures}
                        lastRolled={item.lastRolled}
                    />
                    <button
                        disabled={index !== playerActive}
                        onClick={() => rollDice(index)}
                    >Roll the dice</button>
                </div>
            ))}
            </>
        </div>
    );
};

export default MovesTracker;