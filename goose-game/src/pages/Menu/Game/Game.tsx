import React, {useState} from 'react';
import {Figures, Player, StatePlayerActive, StateEndGame} from "../../../types/types";
import {RandomInteger} from "../../../utils/Functions";
import PlayerBox from "../../../components/PlayerBox/PlayerBox";
import EndGame from "../../../components/EndGame/EndGame";
import {initialStatePlayer} from "../../../data/InitialStatePlayer";
import styles from './Game.module.scss';


const Game: React.FC = ({}) => {
    const [ playersState, setPlayersState] = useState(initialStatePlayer);
    const [endGame, setEndGame] = useState<StateEndGame>({end: false, winnerName: ''});

    const startPlayer: StatePlayerActive = {
        active: RandomInteger(0, playersState.length - 1),
        rollDice: true,
        moveFigures: false,
    }

    const [ playerActive, setPlayerActive ] = useState<StatePlayerActive>(startPlayer);

    const nextPlayerActive = (indexActive:number, players: Player[]) => {
        const nextPlayer = indexActive + 1;

        return nextPlayer > (players.length - 1) ?
            0 :
            nextPlayer;
    };
    const buttonRollDice = (index: number)=> {
        if (index !== playerActive.active) {
            return true;
        } else return !playerActive.rollDice;
    };

    const figureActivation = (playersAll: Player)=> {
        const indexNewFigures = playersAll.figures.findIndex((item: Figures) => !item.active);

        if (indexNewFigures + 1) {
            playersAll.figures[indexNewFigures].active = true;
            playersAll.figures[indexNewFigures].position = 1;
        }
    };

    const findActiveFigures = (figuresList: Figures[]) => {
        return figuresList.findIndex((item: Figures) => !item.complete && item.active);
    };

    const startPositionCheck = (figuresList: Figures[])=> {
        return figuresList.findIndex((item: Figures)=> item.position === 1);
    }

    const validateMoves = (diceResult: number, playersList: Player[], active: number) => {
        const check = (array: Figures[],  position: number, index: number)=> {
            return array.findIndex((item: Figures, indexArray: number) => {
                return index !== indexArray && item.position > 0 && item.position === position;
            });
        };
        const checkMoveBlockedByAlly = (array: Figures[], position: number, startPosition: number) => {
            return array.findIndex((item: Figures)=> item.position > startPosition && item.position < position);
        };

        playersList[active].figures.forEach((item: Figures, index, array) => {
            if (item.position > 0)
                item.active = !(check(array, item.position + diceResult, index) + 1) &&
                    !(checkMoveBlockedByAlly(array, item.position + diceResult, item.position) + 1);
        });
    };

    const callEndGame = (endPlayer: Player)=> {
        let result = false;
        const figuresList = endPlayer.figures;

        result = figuresList[figuresList.length].complete;

        result && console.log('RESULT end game', result);

        setPlayersState(initialStatePlayer);
        setEndGame({end: result, winnerName: endPlayer.name});
    }

    const rollDice = (index: number) => {
        const newPlayers = [...playersState];

        let resultDice = RandomInteger(1, 6);

        if (resultDice === 6) {
            if (startPositionCheck(newPlayers[index].figures) + 1) {
                setPlayerActive({...playerActive, rollDice: false, moveFigures: true});
            } else {
                figureActivation(newPlayers[index]);
            }

        } else {
            const activeFiguresIndex = findActiveFigures(playersState[playerActive.active].figures);

            if (activeFiguresIndex + 1) {
                setPlayerActive({...playerActive, rollDice: false, moveFigures: true});
            } else {
                setPlayerActive({...playerActive,
                    rollDice: true,
                    moveFigures: false,
                    active: nextPlayerActive(index, playersState),
                });
            }
        }

        newPlayers[index].lastRolled = resultDice;

        validateMoves(resultDice, newPlayers, index);

        setPlayersState(newPlayers);
    };

    const movesFigure = (indexFigures: number, lastShot: number) => {
        const newPlayers = [...playersState];
        const figures = newPlayers[playerActive.active].figures[indexFigures];
        const lastRolled = newPlayers[playerActive.active].lastRolled;

        const move = (figures: Figures, moveCount: number) => {
            if (figures.position + moveCount <= figures.totalMoves) {
                figures.position += moveCount;
            }

            if (figures.position === figures.totalMoves) {
                figures.complete = true;
            }

            return figures;
        };

        newPlayers[playerActive.active].figures[indexFigures] = move(figures, lastShot);

        const playerActiveNew = lastRolled === 6 ?
            playerActive.active :
            nextPlayerActive(playerActive.active, playersState);

        setPlayersState(newPlayers);

        setPlayerActive({...playerActive,
            rollDice: true,
            moveFigures: false,
            active: playerActiveNew,
        });

        callEndGame(newPlayers[playerActive.active]);
    };

    return(
        <>
            {endGame.end ?
                <EndGame nameWinner={endGame.winnerName} />
                :
                <div className={styles['tracker-wrapper']}>
                    <>{playersState.map((item, index) => (
                            <div className={styles['tracker-list']} key={index}>
                                <PlayerBox
                                    name={item.name}
                                    figures={item.figures}
                                    lastRolled={item.lastRolled}
                                    moves={movesFigure}
                                    active={index === playerActive.active}
                                    moveFigures={playerActive.moveFigures}
                                />
                                <button
                                    disabled={buttonRollDice(index)}
                                    onClick={() => rollDice(index)}
                                >Roll the dice
                                </button>
                            </div>
                        )
                    )}
                    </>
                </div>
            }
        </>
    );
};

export default Game;