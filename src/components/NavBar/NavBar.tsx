// import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss';
import { useAppDispatch } from '../../app/hooks';
import { resetOptions, setSlider, resetSlider, pagesType } from '../../app/demoSlice';

const NavBar = () => {

	const dispatch = useAppDispatch();

	const linkTo = (path: pagesType) => {
		dispatch(resetOptions());
		dispatch(setSlider(path));
	}

	const BASE_URL = '/CSS-EDU/'

	return (
		<nav className={style.navbar}>
			<ul>
				<li>
					<NavLink to={BASE_URL} onClick={() => dispatch(resetSlider())}>HOME</NavLink>
				</li>
				<li >
					<NavLink to={BASE_URL + 'position'} onClick={() => linkTo('positionElem')}>
						Position elements
					</NavLink>
				</li>
				<li>
					<NavLink to={BASE_URL + 'selectors'} onClick={() => linkTo('selectorsCSS')}>
						CSS Selectors
					</NavLink>
				</li>
				<li>
					<NavLink to={BASE_URL + 'animation'} onClick={() => linkTo('animations')}>
						Animation
					</NavLink>
				</li>
				<li>
					<NavLink to={BASE_URL + 'css-features'} onClick={() => linkTo('features')}>
						CSS Features
					</NavLink>
				</li>
				<li>
					<NavLink to={BASE_URL + 'js'} onClick={() => linkTo('js')}>
						JS Methods
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar;