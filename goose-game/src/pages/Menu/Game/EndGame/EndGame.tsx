import React, {useState} from 'react';
import {PropsEndGame} from "../../../../types/types.ts";
import Menu from "../../Menu.tsx";

const EndGame: React.FC<PropsEndGame> = ({ nameWinner }) => {
    const [menuJump, setMenuJump] = useState<boolean>(false);

    return(
        <>
            {menuJump ?
                <Menu/>
                :
                <div>
                    <p>Winner player: {nameWinner}</p>
                    <button onClick={() => setMenuJump(!menuJump)}>Play again</button>
                </div>
            }
        </>
    )
};

export default EndGame;