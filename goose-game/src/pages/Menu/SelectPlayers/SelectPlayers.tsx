import React from 'react';
import styles from './SelectPlayers.module.scss';

const SelectPlayers: React.FC = () => {
    const numberPlayers = [2, 3, 4];

    return (
        <div className={styles['container']}>
            {
                <div>
                    <p>Select the number of players</p>
                    <ul>
                        {numberPlayers.map(player =>  (
                            <li key={player}>
                                <button onClick={() => 0}>{player}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
};

export default SelectPlayers;