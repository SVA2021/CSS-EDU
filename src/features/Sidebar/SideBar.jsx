import React from 'react';
import style from './SideBar.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetOptions, selectMainOption, selectSlider, setMainOption } from '../Main/demoSlice.ts';
import Options from './Options';

const MainBtn = (props) => {
    const active = useAppSelector(selectMainOption);
    const dispatch = useAppDispatch();
    const setMain = () => {
        dispatch(setMainOption(props.value));
    }

    let classes = (active === props.value)
        ? style.sidebar__optionItem__btn__active
        : style.sidebar__optionItem__btn;

    return (
        <button onClick={setMain} className={classes}> {props.value} </button>
    )
}


const SideBar = () => {
    const page = useAppSelector(selectSlider);
    const dispatch = useAppDispatch();

    const reset = () => {
        dispatch(resetOptions())
    }

    const mainBtnList = Object.keys(page);
    // debugger
    return (
        <article className={"sidebar"} >
            <h2 className={style.sidebar__header}>Settings</h2>
            <div className={style.sidebar__mainBtn} >
                {mainBtnList.map((item) => <MainBtn key={item} value={item} />)}
                <button onClick={reset}>reset all</button>
            </div>
            <Options />
        </article>
    )
}

export default SideBar;