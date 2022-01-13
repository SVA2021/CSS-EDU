import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss'
import { useAppDispatch } from '../../app/hooks';
import { resetOptions, setSlider } from '../../app/demoSlice';

const NavBar = () => {

    const dispatch = useAppDispatch();

    const linkTo = (path) => {
        dispatch(resetOptions());
        dispatch(setSlider(path));
    }

    return (
        <nav className={style.navbar}>
            <ul>
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li >
                    <NavLink to="/position" onClick={() => linkTo('positionElem')}>
                        Position elements</NavLink>
                </li>
                <li>
                    <NavLink to="/selectors" onClick={() => linkTo('selectorsCSS')}>
                        CSS Selectors</NavLink>
                </li>
                <li>
                    <NavLink to="/animation" onClick={() => linkTo('animations')}>
                        Animation</NavLink>
                </li>
                <li>
                    <NavLink to="/css-features" onClick={() => linkTo('features')}>
                        CSS Features</NavLink>
                </li>
                <li>
                    <NavLink to="/js" onClick={() => linkTo('js')}>
                        JS Methods</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;