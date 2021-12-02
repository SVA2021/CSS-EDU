import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={style.main}>
            <Link className={style.link} to="/">CSS EDU</Link>
            <Link to="/selectors">CSS Selectors</Link>
            <Link to="/position">Position of elements</Link>
            <Link to="/animation">Animation</Link>
            <Link to="/features">Features</Link>
        </nav>
    )
}

export default NavBar;