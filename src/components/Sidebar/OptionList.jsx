import React from 'react';
import style from './SideBar.module.scss'
import { useAppSelector } from '../../app/hooks';
import { selectDemo, selectMainOption, selectSlider } from '../Main/demoSlice.ts';
import OptionItem from './OptionItem';

const OptionGroup = (props) => {

    const activeOption = useAppSelector(selectDemo);
    const groupName = props.section;//parent
    const sectionOfOptions = props.sectionOfOptions; //{ display: [], ...}
    const sectionKeys = Object.keys(sectionOfOptions); //display float clear
    const activeCurrentOption = activeOption[groupName];

    return (
        <article>
            <h3 className={style.sidebar__header}> Options for {groupName} </h3>
            <div className={style.sidebar__options}>
                {sectionKeys.map((item) =>//item = display
                    <OptionItem
                        key={item} optionName={item} group={groupName}
                        activeOption={activeCurrentOption}
                        optionValues={sectionOfOptions[item]} //initial block inline 
                    />)}
            </div>
        </article>
    )
}

const OptionList = () => {

    const page = useAppSelector(selectSlider);
    const activeMainOption = useAppSelector(selectMainOption);

    if (!activeMainOption) {
        return (
            <div>choose option in Settings</div>
        )
    }

    const mainOption = page[activeMainOption];
    const optionListKeys = Object.keys(mainOption);
    return (
        <article>
            {optionListKeys.map((item) =>  
            <OptionGroup key={item} section={item} sectionOfOptions={mainOption[item]} />
            )}
        </article>
    )
}

export default OptionList;