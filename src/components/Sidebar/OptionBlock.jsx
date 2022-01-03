import React from 'react';
import style from './OptionItem.module.scss'
import OptionBtn from './OptionBtn';
import { SubTitle } from '../common/Typography';

const OptionBlock = (props) => {

    const optionName = props?.optionName;
    const optionValues = props?.optionValues;
    const activeOption = props?.activeOption;

    if (!optionName) return <div>please choose option</div>

    return (
        <div className={style.sidebar__optionBlock}>
            <SubTitle>{optionName}</SubTitle>
            <div className={style.sidebar__optionBlock__btnList}>
                {optionValues.map((item) =>
                    <OptionBtn
                        key={item} value={item}
                        group={props.group}
                        optionName={optionName}
                        activeOption={activeOption}
                    />)}
            </div>
        </div>
    )
}

export default OptionBlock;