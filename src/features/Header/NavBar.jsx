import React from 'react';
// import { Link } from 'react-router-dom';
import style from './NavBar.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setSlider } from '../Main/demoSlice'

const NavBar = () => {
    const dispatch = useAppDispatch();

    return (
        <nav className={style.navbar}>
            <ul>
                <li>CSS EDU</li>
                <li onClick={() => dispatch(setSlider('positionElem'))}>
                    Position of elements</li>
                <li>CSS Selectors</li>
                <li>Animation</li>
                <li>Features</li>
            </ul>
        </nav>
    )
}

export default NavBar;