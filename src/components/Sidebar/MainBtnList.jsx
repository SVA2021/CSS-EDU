import React from 'react';
import style from './MainBtnList.module.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetOptions, selectMainOption, selectSlider, setMainOption } from '../Main/demoSlice.ts';

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

const MainBtnList = () => {

    const page = useAppSelector(selectSlider);
    const dispatch = useAppDispatch();

    const reset = () => {
        dispatch(resetOptions());
    }

    const mainBtnList = Object.keys(page);

    return (
        <div className={style.sidebar__mainBtn} >
            <h2 className={style.sidebar__header}>Settings</h2>
            <button onClick={reset}>reset all</button>
            <div className={style.sidebar__mainBtn__list} > 
            {mainBtnList.map((item) => <MainBtn key={item} value={item} />)}
            </div>
        </div>
    )
}

export default MainBtnList;