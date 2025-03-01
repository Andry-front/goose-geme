import { useTheme } from './../../hooks/useTheme';
import UserProfile from './../UserProfile/UserProfile';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    const appStyle = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        width: '100%',
        transition: 'background-color 0.3s, color 0.3s',
    }

    return(
        <div style={appStyle}>
            <button onClick={toggleTheme}>Переключить тему</button>
            <UserProfile/>
        </div>
    );
};

export default ThemeSwitch;