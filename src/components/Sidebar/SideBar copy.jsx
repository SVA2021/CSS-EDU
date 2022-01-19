// import React from 'react';
import MainOptions from './MainOptions';
import CommmonOptions from './CommonOptions';
import { useAppSelector } from '../../app/hooks';
import { selectSlider } from '../../app/demoSlice';
// import { isEmpty } from '../../app/functionStore';
import { isEmpty } from '../../app/commonFunctions';

const SideBar = () => {
    const page = useAppSelector(selectSlider);
    let showSideBar = isEmpty(page) ? null : true;
    return (
        showSideBar &&
        <article className={"sidebar"} >
            <MainOptions />
            <CommmonOptions />
        </article>
    )
}

export default SideBar;