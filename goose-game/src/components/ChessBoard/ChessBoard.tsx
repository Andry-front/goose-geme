import React from 'react';
import {ActiveCell, PropsChessBoard} from "../../types/types";
import styles from './ChessBoard.module.scss';
import {positionFigures} from "../../data/InitialStatePlayer.ts";
import IconGoose from "../../UI/svg/IconGoose/IconGoose.tsx";

const ChessBoard: React.FC<PropsChessBoard> = ({ activePlayer, players, hoverFigure, piceDelete }) => {
    const rows = 8;
    const cols = 8;

    const squares = Array.from({length: rows * cols}, (_, index) => index);

    return(
        <div className={styles['chess-board']}>
            {squares.map((_, index) => {
                const isBlack = Math.floor(index / cols) % 2 === (index % cols) % 2;

                let overlay = false;
                let start = false;
                let activeCell = {
                    active: false,
                    color: '',
                };

                const activeCellTest: ActiveCell[] = [];

                hoverFigure.positionMove = hoverFigure.position + players[activePlayer].lastRolled;

                players.forEach((player, indexPlayer) => {
                    player.figures.forEach((figure, figureIndex) => {

                        figure.position > 0 &&
                        positionFigures[indexPlayer].forEach(item => {

                            if (figure.position === item.position && item.boxElement === index) {
                               activeCell.active = true;
                               activeCell.color = player.color;
                           }
                            if (figure.position === item.position && item.boxElement === index) {
                                activeCellTest.push({
                                    playerIndex: indexPlayer,
                                    figureIndex: figureIndex,
                                });
                            }
                        });
                    });
                });

                activeCellTest.length > 1 && piceDelete(activeCellTest);

                hoverFigure.hover && players[activePlayer].figures.forEach((figure, indexPlayer) => {

                    indexPlayer === hoverFigure.indexFigure &&
                    positionFigures[activePlayer].forEach(item => {

                        if (item.position === figure.position && item.boxElement === index) {
                            start = true;
                        } else if (hoverFigure.positionMove === item.position && item.boxElement === index) {
                            overlay = true;
                        }
                    });
                });

                return(
                    <div key={index} className={`${styles.square} ${isBlack ? styles.black : styles.white}`}>
                        {overlay && <div className={styles['overlay']}/>}
                        {start &&
                            <div className={styles['start']}>
                                <div></div>
                            </div>}
                        {activeCell.active && <IconGoose color={activeCell.color} width={40} height={40} />}
                    </div>
                )
            })}
        </div>
    )
};

export default ChessBoard;