import React from 'react';
import style from './MainBtnList.module.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetOptions, selectMainOption, selectSlider, setMainOption } from '../../app/demoSlice';
import MainBtn from './MainBtn';

const MainBtnList = () => {

    const active = useAppSelector(selectMainOption);
    const page = useAppSelector(selectSlider);
    const dispatch = useAppDispatch();

    const mainBtnList = Object.keys(page);

    const setMain = (value) => {
        dispatch(setMainOption(value));
    }

    const isActive = (value) => {
        if (active === value) {
            return style.sidebar__optionItem__btn__active
        } else {
            return style.sidebar__optionItem__btn;
        }
    }

    const reset = () => {
        dispatch(resetOptions());
    }

    return (
        <div className={style.sidebar__mainBtn} >
            <h2 className={style.sidebar__header}>Settings</h2>
            <button onClick={reset}>reset all</button>
            <div className={style.sidebar__mainBtn__list} >
                {mainBtnList.map((item) => <MainBtn
                    key={item}
                    value={item}
                    class={isActive(item)}
                    setMain={() => setMain(item)}
                />)}
            </div>
        </div>
    )
}

export default MainBtnList;