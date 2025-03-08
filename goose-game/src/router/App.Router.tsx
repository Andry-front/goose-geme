import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Game from "../pages/Menu/Game/Game";
import Menu from "../pages/Menu/Menu";

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/game" component={Game} />
            </Switch>
        </Router>
    )
}

export default AppRouter;