import { useTheme } from './../../hooks/useTheme';
import TumblerTheme from "../../utils/TumblerTheme/TumblerTheme";
import styles from './ThemeSwitch.module.scss';
import classNames from 'classnames/bind';
import AppRouter from "../../router/App.Router";
import {BrowserRouter as Router} from "react-router-dom";

const cx = classNames.bind(styles);

const ThemeSwitch = () => {
    const { theme } = useTheme();

    const classNameWrapper = cx({
        'switch-box': true,
        'light-theme': theme === 'light',
        'dark-theme': theme === 'dark',
    });

    return(
        <div className={classNameWrapper}>
            <TumblerTheme/>
            <Router>
                <AppRouter/>
            </Router>
        </div>
    );
};

export default ThemeSwitch;