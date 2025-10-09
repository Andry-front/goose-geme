import React from 'react';
import { PropsChessBoard } from "../../types/types";
import styles from './ChessBoard.module.scss';
import {positionFigures} from "../../data/InitialStatePlayer.ts";
import IconGoose from "../../UI/svg/IconGoose/IconGoose.tsx";

const ChessBoard: React.FC<PropsChessBoard> = ({ activePlayer, players }) => {
    const rows = 8;
    const cols = 8;

    console.log(activePlayer);
    console.log(players);
    console.log(positionFigures);

    const squares = Array.from({length: rows * cols}, (_, index) => index);


    return(
        <div className={styles['chess-board']}>
            {squares.map((_, index) => {
                const isBlack = Math.floor(index / cols) % 2 === (index % cols) % 2;

                let overlay = false;
                let activeCell = {
                    active: false,
                    color: ''
                };

                players.forEach((player, indexPlayer) => {

                    player.figures.forEach(figure => {

                        figure.position > 0 && positionFigures[indexPlayer].forEach(item => {
                           if (figure.position === item.position && item.boxElement === index) {

                               activeCell.active = true;
                               activeCell.color = player.color;
                           }
                        })
                    })
                });

                activeCell.active && console.log(activeCell);

                return(
                    <div key={index} className={`${styles.square} ${isBlack ? styles.black : styles.white}`}>
                        {overlay && <div className={`${styles.overlay}`}/>}
                        {activeCell.active && <IconGoose color={activeCell.color} width={40} height={40} />}
                    </div>
                )
            })}
        </div>
    )
};

export default ChessBoard;