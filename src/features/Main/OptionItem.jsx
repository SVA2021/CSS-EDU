import React from 'react';
import style from './OptionItem.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSlider } from './demoSlice';


const OptionBtn = (props) => {

    const dispatch = useAppDispatch();

    let classes = (props.isActive)
        ? style.sidebar__optionItem__btn
        : style.sidebar__optionItem__btn + style.sidebar__optionItem__btn__active;

    return (
        <button className={style.sidebar__optionItem__btn}>
            {props.value}
        </button>
    )
}

const OptionItem = (props) => {

    const optionName = props.optionName;
    const optionValues = props.optionValues;

    if (!optionName) return <div>please choose option</div>
    // debugger
    return (
        <article className={style.sidebar__optionItem}>
            <h3 className={style.sidebar__optionItem__header}>
                {optionName}
            </h3>
            <div className={style.sidebar__optionItem__btnList}>
                {optionValues.map((item) => <OptionBtn key={item} value={item} />)}
            </div>
        </article>
    )
}

export default OptionItem;