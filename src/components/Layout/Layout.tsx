import React, { Fragment, ReactNode } from "react";
import classes from './Layout.module.css'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Fragment>
            <main className={classes.main}>{children}</main>
        </Fragment>
    )
}

export default Layout;