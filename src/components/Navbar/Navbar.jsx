import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink  to="/profile" className={navData=>navData.isActive ? style.active : style.item}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink  to="/dialogs" className={navData=>navData.isActive ? style.active : style.item}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink  to="/users" className={navData=>navData.isActive ? style.active : style.item}>Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
