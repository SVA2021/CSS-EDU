import React from 'react';
import style from './OptionItem.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSlider, setDemoOption } from './demoSlice';


const OptionBtn = (props) => {

    const dispatch = useAppDispatch();

    const activeOption = props.activeOption;
    const value = props.value;
    const active = activeOption[props.optionName] === value

    let classes = (active)
        ? style.sidebar__optionItem__btn__active
        : style.sidebar__optionItem__btn;

    return (
        <button
            onClick={() => dispatch(setDemoOption({
                group: props.group,
                option: props.optionName,
                optionValue: props.value,
            }))}
            className={classes}>
            {value}
        </button>
    )
}

const OptionItem = (props) => {

    const optionName = props.optionName;
    const optionValues = props.optionValues;
    const activeOption = props.activeOption;

    if (!optionName) return <div>please choose option</div>
    // debugger
    return (
        <article className={style.sidebar__optionItem}>
            <h3 className={style.sidebar__optionItem__header}>
                {optionName}
            </h3>
            <div className={style.sidebar__optionItem__btnList}>
                {optionValues.map((item) => <OptionBtn
                    key={item} value={item}
                    group={props.group}
                    optionName={optionName}
                    activeOption={activeOption}
                />)}
            </div>
        </article>
    )
}

export default OptionItem;