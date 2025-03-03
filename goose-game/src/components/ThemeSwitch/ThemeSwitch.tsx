import { useTheme } from './../../hooks/useTheme';
import Menu from "../../pages/Menu/Menu";
import TumblerTheme from "../../utils/TumblerTheme/TumblerTheme";
import styles from './ThemeSwitch.module.scss';
import classNames from 'classnames/bind';

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
            <Menu/>
        </div>
    );
};

export default ThemeSwitch;