import React from 'react';
import style from './MainBtnList.module.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetOptions, selectMainOption, selectSlider, setMainOption } from '../../app/demoSlice';
import MainBtn from './MainBtn';
import { SectionTitle } from '../common/Typography';

const MainBtnList = () => {

    const active = useAppSelector(selectMainOption);
    const page = useAppSelector(selectSlider);
    const dispatch = useAppDispatch();

    const mainBtnList = Object.keys(page);

    const setMain = (value) => {
        dispatch(setMainOption(value));
    }

    const isActive = (value) => {
        return (active === value)
            ? style.sidebar__mainBtn__active : style.sidebar__mainBtn;
    }

    const reset = () => {
        dispatch(resetOptions());
    }

    return (
        <div className={style.sidebar__mainBtn_group} >
            <SectionTitle>settings</SectionTitle>
            <div className={style.sidebar__mainBtn__list} >
                {mainBtnList.map((item) => <MainBtn
                    key={item}
                    value={item}
                    class={isActive(item)}
                    setMain={() => setMain(item)}
                />)}
                <button className={style.sidebar__mainBtn__reset} onClick={reset}>
                    reset all
                </button>
            </div>
        </div>
    )
}

export default MainBtnList;