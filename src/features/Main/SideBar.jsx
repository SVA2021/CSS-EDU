import React from 'react';
import style from './SideBar.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSlider } from './demoSlice';
import Preloader from '../Preloader/Preloader';
import OptionItem from './OptionItem';
// import '../../App.css';

const MainBtn = (props) => {

    const dispatch = useAppDispatch();

    let classes = {}
    // (props.isActive)
    //     ? style.sidebar__optionItem__btn
    //     : style.sidebar__optionItem__btn + style.sidebar__optionItem__btn__active;

    return (
        <button className={style.sidebar__optionItem__btn}>
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
    const mainOption = page[mainBtnList[0]];// to be update choose method
    const currentParentOptionArray = Object.keys(mainOption.parent);
    const currentChildItemOptionArray = Object.keys(mainOption.childItem);
    // debugger
    return (
        <article className={"sidebar"} >
            <h2 className={style.sidebar__header}>Settings</h2>
            <div className={style.sidebar__mainBtn} style={{ color: 'yellow' }}>
                {mainBtnList.map((item) => <MainBtn key={item} value={item} />)}
            </div>
            <h3 className={style.sidebar__header}> Options for Parent element </h3>
            <div className={style.sidebar__options}>
                {currentParentOptionArray.map((item) => <OptionItem
                    key={item} optionName={item} optionValues={mainOption.parent[item]} />)}
            </div>
            <h3 className={style.sidebar__header}> Options for Child element </h3>
            <div className={style.sidebar__options}>
                {currentChildItemOptionArray.map((item) => <OptionItem
                    key={item} optionName={item} optionValues={mainOption.childItem[item]} />)}
            </div>
        </article>
    )
}

export default SideBar;