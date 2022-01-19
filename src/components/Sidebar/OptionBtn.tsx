import React, { useEffect } from 'react';
import style from './SideBar.module.scss';
import { useAppDispatch } from '../../app/hooks';
import { setDemoOption } from '../../app/demoSlice';
import { OptionBtnType } from './OptionBlock';

const OptionBtn = (props: OptionBtnType) => {

    const dispatch = useAppDispatch();

    const value = props.value;
    const btnName = value.name;
    const activeOption = props?.activeOption;

    const active = activeOption[props.optionName] === value;

    const setOption = () => {
        dispatch(setDemoOption({
            group: props.group,
            option: props.optionName,
            optionValue: value,
        }))
    }

    useEffect(() => {
        if (props.isAlone) setOption();
    });

    const classes = (active)
        ? style.optionItem__btn__active
        : style.optionItem__btn;

    return (
        <button onClick={setOption} className={classes}>
            {btnName}
        </button>
    )
}

export default OptionBtn;