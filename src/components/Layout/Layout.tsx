import React, { Fragment, ReactNode, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from './Layout.module.css'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(true)
    return (
        <Fragment>
            <Sidebar open={open} setOpen={setOpen} >
            <main className={`${open ? classes.mainOpen : classes.main}`}>{children}</main>
            </Sidebar>
        </Fragment>
    )
}

export default Layout;