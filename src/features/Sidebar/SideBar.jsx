import React from 'react';
import MainBtnList from './MainBtnList';
import OptionList from './OptionList';

const SideBar = () => {

    return (
        <article className={"sidebar"} >
            <MainBtnList />
            <OptionList />
        </article>
    )
}

export default SideBar;