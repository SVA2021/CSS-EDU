import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'
import { useAppDispatch } from '../../app/hooks';
import { setSlider } from '../Main/demoSlice'

const NavBar = () => {
    const dispatch = useAppDispatch();

    return (
        <nav className={style.navbar}>
            <ul>
                <li>
                    <Link to="/">CSS EDU</Link>
                </li>
                <li>
                    <Link to="/position"
                        onClick={() => dispatch(setSlider('positionElem'))}>
                        Position elements</Link>
                </li>
                <li>
                    <Link to="/selectors">CSS Selectors</Link>
                </li>
                <li>
                    <Link to="/animation">Animation</Link>
                </li>
                <li>
                    <Link to="/features">Features</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;