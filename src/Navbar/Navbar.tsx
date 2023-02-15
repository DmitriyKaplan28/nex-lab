import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <span><NavLink to="/">Overview</NavLink></span>
            <span><NavLink to="/swap">Swap</NavLink></span>
            <span><NavLink to="/trade">Trade</NavLink></span>
            <span><NavLink to="/portfolio">Portfolio</NavLink></span>
        </div>
    );
};
