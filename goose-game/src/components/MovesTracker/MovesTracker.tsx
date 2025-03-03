import React from 'react';
import { PlayersList } from "../../types/types";

const MovesTracker: React.FC<PlayersList> = ({ players }) => {
    return(
        <div>
            <p>{players.map((item) => {
                // @ts-ignore
                return(<string>{item.name}</string>);
            })}</p>
        </div>
    );
};

export default MovesTracker;