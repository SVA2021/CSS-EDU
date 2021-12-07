import React from 'react';
import style from './SideBar.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectMainOption, selectSlider, setMainOption } from './demoSlice';
import Preloader from '../Preloader/Preloader';
import OptionItem from './OptionItem';
import Options from './Options';
// import '../../App.css';

const MainBtn = (props) => {
    const active = useAppSelector(selectMainOption);
    const dispatch = useAppDispatch();

    let classes = (active === props.value)
        ? style.sidebar__optionItem__btn__active
        : style.sidebar__optionItem__btn;

    return (
        <button
            onClick={() => dispatch(setMainOption(props.value))}
            className={classes}>
            {props.value}
        </button>
    )
}


const SideBar = () => {
    const page = useAppSelector(selectSlider);
    const activeMainOption = useAppSelector(selectMainOption);

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
    // const mainOption = page[activeMainOption];// to be update choose method
    // const currentParentOptionArray = Object.keys(mainOption.parent);
    // const currentChildItemOptionArray = Object.keys(mainOption.childItem);
    // debugger
    return (
        <article className={"sidebar"} >
            <h2 className={style.sidebar__header}>Settings</h2>
            <div className={style.sidebar__mainBtn} style={{ color: 'yellow' }}>
                {mainBtnList.map((item) => <MainBtn key={item} value={item} />)}
            </div>
            <Options />
            {/* <h3 className={style.sidebar__header}> Options for Parent element </h3>
            <div className={style.sidebar__options}>
                {currentParentOptionArray.map((item) => <OptionItem
                    key={item} optionName={item} optionValues={mainOption.parent[item]} />)}
            </div>
            <h3 className={style.sidebar__header}> Options for Child element </h3>
            <div className={style.sidebar__options}>
                {currentChildItemOptionArray.map((item) => <OptionItem
                    key={item} optionName={item} optionValues={mainOption.childItem[item]} />)}
            </div> */}
        </article>
    )
}

export default SideBar;