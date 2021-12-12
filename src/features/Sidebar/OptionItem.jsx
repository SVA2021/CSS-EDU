import React from 'react';
import style from './OptionItem.module.css'
import { useAppDispatch } from '../../app/hooks';
import { setDemoOption } from '../Main/demoSlice.ts';

const OptionBtn = (props) => {

    const dispatch = useAppDispatch();
    let value;
    const activeOption = props?.activeOption;
    // const value = (typeof (props?.value) == );
    // console.log(typeof(value));
    if (typeof (props?.value) == "string") value = props.value;
    if (typeof (props?.value) == "object") value = props.value.id;
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
        <button onClick={setOption} className={classes}> {value} </button>
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
                {optionValues.map((item) =>
                    <OptionBtn
                        key={item} value={item}
                        group={props.group}
                        optionName={optionName}
                        activeOption={activeOption}
                    />)}
        </article>
    )
}

export default OptionItem;