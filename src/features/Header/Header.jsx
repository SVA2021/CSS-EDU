import React from 'react';
import style from './Header.module.css'
// import NavBar from './NavBar';
import NavBar from './NavBar';


const Header = () => {
    return (
        <header className={style.header}>
            {/* <h2>header will be here</h2> */}
            <NavBar />
        </header>
    )
}
 
export default Header;