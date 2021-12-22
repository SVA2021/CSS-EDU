import React from 'react';
import MainBtnList from './MainBtnList';
import TotalOptionList from './TotalOptionList';

const SideBar = () => {

    return (
        <article className={"sidebar"} >
            <MainBtnList />
            <TotalOptionList />
        </article>
    )
}

export default SideBar;