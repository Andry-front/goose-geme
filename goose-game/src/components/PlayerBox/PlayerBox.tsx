import React from 'react';
import { PropsPlayerBox } from '../../types/types';
import styles from './PlayerBox.module.scss';

const PlayerBox: React.FC<PropsPlayerBox> = ({ name, figures, lastRolled }) => {
    return(
        <div className={styles['player-wrapper']}>
            <h3>Player {name}</h3>
            <p>last rolled: {lastRolled}</p>
            <ul>
                {figures.map((item, index) => (
                     <li
                         className={item.active ?
                         styles['active']:
                         ''}
                         key={index}>
                         <span>Moves left: {item.movesLeft}</span>
                         <span>Position: {item.position}</span>
                     </li>
                    ))}
            </ul>
        </div>
    );
};

export default PlayerBox;