import React from 'react';
import {PropsPlayerBox} from '../../types/types';
import styles from './PlayerBox.module.scss';
import IconGoose from "../../UI/svg/IconGoose/IconGoose.tsx";

const PlayerBox: React.FC<PropsPlayerBox> = ({ name, figures, lastRolled, moves, active, moveFigures, color, eventHoverFigure }) => {

    return(
        <div className={styles['player-wrapper']}>
            <h3>Player: {name}</h3>
            <div>
                <IconGoose color={color} width={20} height={20} />
            </div>
            <p>last rolled: {lastRolled}</p>
            <ul>
                {figures.map((item, index) => {
                    const activeItem = item.active && !item.complete && active && moveFigures;

                    return (
                        <li
                            key={index}
                            className={ activeItem ? styles['active']: ''}
                            onClick={() => {
                                activeItem && moves(index, lastRolled);
                                activeItem && eventHoverFigure(0, 0, false);
                            }}
                            onMouseEnter={() =>{ activeItem && eventHoverFigure(item.position, index, true)}}
                            onMouseLeave={() =>{ activeItem && eventHoverFigure(0, 0, false)}}>
                            <span>Position: {item.position}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default PlayerBox;