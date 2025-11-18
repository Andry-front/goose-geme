import {Route, Routes} from 'react-router-dom';
import Game from "../pages/Menu/Game/Game";
import Menu from "../pages/Menu/Menu";
import SelectPlayers from "../pages/Menu/SelectPlayers/SelectPlayers";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Menu/>} />
            <Route  path='/select-players' element={<SelectPlayers/>} />
            <Route path="/game" element={<Game/>} />
        </Routes>
    )
}

export default AppRouter;