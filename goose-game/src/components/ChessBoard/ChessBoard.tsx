import React from 'react';
import styles from './ChessBoard.module.scss';

const ChessBoard: React.FC = () => {
    const rows = 8;
    const cols = 8;

    const squares = Array.from({length: rows * cols}, (_, index) => index);

    console.log(squares);

    return(
        <div className={styles['chess-board']}>
            {squares.map((_, index) => {
                const isBlack = Math.floor(index / cols) % 2 === (index % cols) % 2;

                return(
                    <>
                        <div key={index} className={`${styles.square} ${isBlack ? styles.black : styles.white}`}/>
                    </>
                )
            })}
        </div>
    )
};

export default ChessBoard;