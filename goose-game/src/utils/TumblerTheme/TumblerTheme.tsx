import { useTheme } from './../../hooks/useTheme';
import styles from "./TumblerTheme.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TumblerTheme = () => {
    const { theme, toggleTheme } = useTheme();

    const className = cx({
        'tumbler-wrapper': true,
        [theme]: true,
    })

    return(
        <div onClick={toggleTheme} className={className}>
            <span className={styles[theme]}></span>
        </div>
    );
};

export default TumblerTheme;