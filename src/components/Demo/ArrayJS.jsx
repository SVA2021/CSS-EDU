import { useAppSelector } from '../../app/hooks';
import style from './DemoPosition.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import React, { useState } from 'react';
import { normalizeObjText, propertyCopy, setArray } from '../../app/functionStore';
import InputRange from '../common/Input';

const ArrayJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);

    const [inputQty, setQty] = useState(3);

    const childQty = inputQty;

    const childArray = [];

    setArray(childQty, childArray);

    return (
        <section className={"demo"}>
            <SectionTitle>Array method</SectionTitle>
            <div className={style.fix}>
                <div className={style.parent}> <Strong>initial state</Strong></div>
                <div className={style.parent}> <Strong>final state</Strong></div>
            </div>
        </section>
    )
}

export default ArrayJS;