import React, { useEffect } from 'react';
import style from './SideBar.module.scss';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetOptions, selectMainOption, selectSlider, setMainOption } from '../../app/demoSlice';
import MainBtn from './MainBtn';
import { SectionTitle } from '../common/Typography';
import { isEmpty } from '../../app/commonFunctions';

const MainBtnList = () => {

    const active = useAppSelector(selectMainOption);
    const page = useAppSelector(selectSlider);
    const dispatch = useAppDispatch();

    const mainBtnList = (isEmpty(page)) ? [] : Object.keys(page);

    const setMain = (value: string) => {
        dispatch(setMainOption(value));
    }

    useEffect(() => {
        if (mainBtnList.length === 1) setMain(mainBtnList[0]);
    });

    const isActive = (value: string) => {
        return (active === value)
            ? style.mainBtn__active : style.mainBtn;
    }

    const reset = () => {
        dispatch(resetOptions());
    }

    return (
        <div>
            <SectionTitle>settings</SectionTitle>
            <div className={style.mainBtn__list} >
                {mainBtnList.map((item) => <MainBtn
                    key={item}
                    value={item}
                    class={isActive(item)}
                    setMain={() => setMain(item)}
                />)}
                <button className={style.mainBtn__reset} onClick={reset}>
                    reset all
                </button>
            </div>
        </div>
    )
}

export default MainBtnList;