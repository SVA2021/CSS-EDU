// import React from 'react';
import style from './SideBar.module.scss';
import OptionBtn from './OptionBtn';
import { SubTitle } from '../common/Typography';

const OptionBlock = (props) => {

    const optionName = props?.optionName;
    const optionValues = props?.optionValues;
    const activeOption = props?.activeOption;

    let isAlone = (optionValues.length === 1);

    return (
        <div>
            <SubTitle>{optionName}</SubTitle>
            <div className={style.optionBlock__list}>
                {optionValues.map((item) =>
                    <OptionBtn
                        key={item.optionName + String(Math.random(1))} 
                        value={item}
                        group={props.group}
                        optionName={optionName}
                        activeOption={activeOption}
                        isAlone={isAlone}
                    />)}
            </div>
        </div>
    )
}

export default OptionBlock;