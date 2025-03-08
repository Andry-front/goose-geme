import React from 'react';
import {PropsPlayerBox} from '../../types/types';
import styles from './PlayerBox.module.scss';

const PlayerBox: React.FC<PropsPlayerBox> = ({ name, figures, lastRolled, moves, active, moveFigures }) => {
    return(
        <div className={styles['player-wrapper']}>
            <h3>Player {name}</h3>
            <p>last rolled: {lastRolled}</p>
            <ul>
                {figures.map((item, index) => (
                     <li
                         className={item.active &&
                         !item.complete &&
                         active &&
                         moveFigures ?
                         styles['active']:
                         ''}
                         onClick={() =>
                             item.active &&
                             !item.complete &&
                             active &&
                             moveFigures &&
                             moves(index, lastRolled)}
                         key={index}>
                         <span>Total moves: {item.totalMoves}</span>
                         <span>Position: {item.position}</span>
                     </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default PlayerBox;