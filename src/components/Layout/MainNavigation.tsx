import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import classes from './MainNavigation.module.css';


const MainHeader = () => {
    const location = useLocation()
    const path = location.pathname

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/records-overview' className={path === '/records-overview' || path === '/' ? classes.active : ""}>
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add-records' className={path === '/add-records' ? classes.active : ""}>
                            Add Records
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;