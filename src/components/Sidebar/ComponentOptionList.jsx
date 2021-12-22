import React from 'react';
import style from './SideBar.module.scss'
import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import OptionBlock from './OptionBlock';

const ComponentOptionList = (props) => {

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
                    <OptionBlock
                        key={item}
                        optionName={item}
                        group={groupName}
                        activeOption={activeCurrentOption}
                        optionValues={sectionOfOptions[item]} //initial block inline 
                    />)}
            </div>
        </article>
    )
}

export default ComponentOptionList;