import React, { Fragment, ReactNode } from "react";
import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </Fragment>
    )
}

export default Layout;