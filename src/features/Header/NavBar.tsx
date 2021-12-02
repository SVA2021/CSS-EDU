import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={style.navbar}>
            <ul>
                <li><Link to="/">CSS EDU</Link></li>
                <li><Link to="/position">Position of elements</Link></li>
                <li><Link to="/selectors">CSS Selectors</Link></li>
                <li><Link to="/animation">Animation</Link></li>
                <li><Link to="/features">Features</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;