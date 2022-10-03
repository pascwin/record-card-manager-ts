import {useContext} from "react"
import { useLocation, NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';
import { UserContext } from "../../contexts/user-context";


const MainHeader = () => {
    const location = useLocation()
    const path = location.pathname
    const {isLoggedIn} = useContext(UserContext)

    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home' className={path === '/home' || path === '/' ? classes.active : ""}>
                            Home
                        </NavLink>
                    </li>
                    {isLoggedIn && <li>
                        <NavLink to='/records-overview' className={path === '/records-overview' ? classes.active : ""}>
                            Overview
                        </NavLink>
                    </li>}
                    {isLoggedIn && <li>
                        <NavLink to='/add-records' className={path === '/add-records' ? classes.active : ""}>
                            Add Records
                        </NavLink>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;