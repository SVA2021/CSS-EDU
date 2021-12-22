import React from 'react';
import style from './OptionItem.module.scss'
import OptionBtn from './OptionBtn';

const OptionBlock = (props) => {

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

export default OptionBlock;