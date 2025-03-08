import React from 'react'
import styles from './Menu.module.scss';
import {Link} from "react-router-dom";

const Menu: React.FC = () => {
    return(
        <div className={styles['menu-box']}>
            <Link to='/game'>
                <button>Play</button>
            </Link>
        </div>
    );
};

export default Menu;