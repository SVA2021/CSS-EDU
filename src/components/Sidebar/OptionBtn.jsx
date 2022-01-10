import React from 'react';
import style from './OptionItem.module.scss'
import { useAppDispatch } from '../../app/hooks';
import { setDemoOption } from '../../app/demoSlice';

const OptionBtn = (props) => {

    const dispatch = useAppDispatch();

    let value= props.value; 
    let btnName = value.name;
    const activeOption = props?.activeOption;

    const active = activeOption[props.optionName] === value;

    const setOption = () => {
        dispatch(setDemoOption({
            group: props.group,
            option: props.optionName,
            optionValue: value,
        }))
    }

    if (props.isAlone) setOption();

    let classes = (active)
        ? style.sidebar__optionItem__btn__active
        : style.sidebar__optionItem__btn;

    return (
        <button onClick={setOption} className={classes}>
            {btnName}
        </button>
    )
}

export default OptionBtn;