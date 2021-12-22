import React from 'react';
import style from './OptionItem.module.scss'
import { useAppDispatch } from '../../app/hooks';
import { setDemoOption } from '../../app/demoSlice';

const OptionBtn = (props) => {

    const dispatch = useAppDispatch();

    let value, btnName;
    const activeOption = props?.activeOption;

    if (typeof (props?.value) == "string") {
        value = props.value;
        btnName = value;
    }
    if (typeof (props?.value) == "object") {
        value = props.value;
        btnName = value.id;
    }
    const active = activeOption[props.optionName] === value;

    const setOption = () => {
        dispatch(setDemoOption({
            group: props.group,
            option: props.optionName,
            optionValue: value,
        }))
    }

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