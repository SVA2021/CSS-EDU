import React from 'react';
import style from './SideBar.module.scss'
import { useAppSelector } from '../../app/hooks';
import { selectMainOption, selectSlider } from '../../app/demoSlice';
import ComponentOptionList from './ComponentOptionList';

const TotalOptionList = () => {

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
                <ComponentOptionList
                    key={item}
                    section={item}
                    sectionOfOptions={mainOption[item]}
                />
            )}
        </article>
    )
}

export default TotalOptionList;