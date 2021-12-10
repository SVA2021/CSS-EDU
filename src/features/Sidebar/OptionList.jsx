import React from 'react';
import style from './SideBar.module.css'
import { useAppSelector } from '../../app/hooks';
import { selectDemo, selectMainOption, selectSlider } from '../Main/demoSlice.ts';
import OptionItem from './OptionItem';

const OptionList = () => {

    const page = useAppSelector(selectSlider);
    const activeMainOption = useAppSelector(selectMainOption);
    const activeParentOption = useAppSelector(selectDemo).parent;
    const activeChildOption = useAppSelector(selectDemo).childItem;

    if (!activeMainOption) {
        return (
            <div>choose option in Settings</div>
        )
    }

    const mainOption = page[activeMainOption];
    const currentParentOptionArray = Object.keys(mainOption.parent);
    const currentChildItemOptionArray = Object.keys(mainOption.childItem);

    return (
        <article>
            <h3 className={style.sidebar__header}> Options for Parent element </h3>
            <div className={style.sidebar__options}>
                {currentParentOptionArray.map((item) =>
                    <OptionItem
                        key={item} optionName={item} group={'parent'}
                        activeOption={activeParentOption}
                        optionValues={mainOption.parent[item]}
                    />)}
            </div>
        </article>
    )
}

export default OptionList;