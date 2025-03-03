import { useTheme } from './../../hooks/useTheme';
import Menu from "../../pages/Menu/Menu";
import styles from './ThemeSwitch.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    const className = cx({
        'switch-box': true,
        'light-theme': theme === 'light',
        'dark-theme': theme === 'dark',
    });

    return(
        <div className={className}>
            <button onClick={toggleTheme}>Переключить тему</button>
            <Menu/>
        </div>
    );
};

export default ThemeSwitch;