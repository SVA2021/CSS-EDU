import React from 'react';
import style from './OptionItem.module.scss'
import { useAppDispatch } from '../../app/hooks';
import { setDemoOption } from '../Main/demoSlice.ts';

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
        <button onClick={setOption} className={classes}> {btnName} </button>
    )
}

const OptionItem = (props) => {

    const optionName = props?.optionName;
    const optionValues = props?.optionValues;
    const activeOption = props?.activeOption;

    if (!optionName) return <div>please choose option</div>

    return (
        <article className={style.sidebar__optionItem}>
            <h3 className={style.sidebar__optionItem__header}> {optionName} </h3>
            <div className={style.sidebar__optionItem__btnList}>
                {optionValues.map((item) =>
                    <OptionBtn
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