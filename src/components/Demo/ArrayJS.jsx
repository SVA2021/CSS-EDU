import { useAppSelector } from '../../app/hooks';
// import style from './DemoPosition.module.scss'
import style from './ArrayJS.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong, SubTitleUpper } from '../common/Typography';
import React, { useState } from 'react';
import { normalizeObjText, propertyCopy, setArray } from '../../app/functionStore';
import InputRange from '../common/Input';
import { arrayHandle } from '../../app/dataJS';

const ArrayElement = (props) => {

    const status = (props.modified) ? style.modified : style.original;

    return (
        <div className={status}></div>
    )
}

const ArrayJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.arrayMethod;
    const initArray = activeDemoStatus.initial;
    const method = activeDemoStatus.name;
    const [inputQty, setQty] = useState(3);


    const childQty = inputQty;

    const array = [];
    array.length = 5;
    array.fill(false);

    const result= arrayHandle(method, initArray);
    console.log(result);
    return (
        <section className={"demo"}>
            <SubTitleUpper>Array method</SubTitleUpper>
            <Highlighted><Strong>method: </Strong>123</Highlighted>

            <div className={style.fix}>
                <div className={style.parent}>
                    <Highlighted>initial state</Highlighted>
                    {initArray.map((item) => <ArrayElement modified={item} />)}
                </div>
                <div className={style.parent}>
                    <Highlighted>final state</Highlighted>
                    {array.map((item) => <ArrayElement modified={true} />)}

                </div>
            </div>
        </section>
    )
}

export default ArrayJS;