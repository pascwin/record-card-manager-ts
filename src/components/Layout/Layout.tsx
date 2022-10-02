import React, { Fragment, ReactNode } from "react";
import classes from './Layout.module.css'
import MainNavigation from "../Navigation/Navigation";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </Fragment>
    )
}

export default Layout;