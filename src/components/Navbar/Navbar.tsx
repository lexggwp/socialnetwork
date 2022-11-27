import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={(({isActive}) => isActive ? s.activeLink : s.link)} to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to='/settings'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to='/users'>Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;