import React, { Fragment, ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from './Layout.module.css'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <Fragment>
            <Sidebar>
            <main className={classes.main}>{children}</main>
            </Sidebar>
        </Fragment>
    )
}

export default Layout;