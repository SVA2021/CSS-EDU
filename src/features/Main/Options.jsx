import React from 'react';
import style from './SideBar.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectMainOption, selectSlider, setMainOption } from './demoSlice';
import OptionItem from './OptionItem';

const Options = () => {
    const page = useAppSelector(selectSlider);
    const activeMainOption = useAppSelector(selectMainOption);

    if (!activeMainOption) {
        return (
            <div>choose option</div>
        )
    }

    const mainOption = page[activeMainOption];
    const currentParentOptionArray = Object.keys(mainOption.parent);
    const currentChildItemOptionArray = Object.keys(mainOption.childItem);
    // debugger
    return (
        <>
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
        </>
    )
}

export default Options;