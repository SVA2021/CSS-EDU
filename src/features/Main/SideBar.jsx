import React from 'react';
import style from './SideBar.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { resetOptions, selectMainOption, selectSlider, setMainOption } from './demoSlice';
import Options from './Options';

const MainBtn = (props) => {
    const active = useAppSelector(selectMainOption);
    const dispatch = useAppDispatch();

    // const setMainOption = () => {
    //     dispatch(setMainOption(props.value));
    //     // dispatch(resetOptions());
    // }

    let classes = (active === props.value)
        ? style.sidebar__optionItem__btn__active
        : style.sidebar__optionItem__btn;

    return (
        <button
            onClick={() => dispatch(setMainOption(props.value))}
            // onClick={setMainOption}
            className={classes}>
            {props.value}
        </button>
    )
}


const SideBar = () => {
    const page = useAppSelector(selectSlider);

    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    if (isEmpty(page)) {
        return (
            <div>choose option</div>
        )
    }

    const mainBtnList = Object.keys(page);
    // debugger
    return (
        <article className={"sidebar"} >
            <h2 className={style.sidebar__header}>Settings</h2>
            <div className={style.sidebar__mainBtn} >
                {mainBtnList.map((item) => <MainBtn key={item} value={item} />)}
            </div>
            <Options />
        </article>
    )
}

export default SideBar;