import { useAppSelector } from '../../app/hooks';
import style from './Demo.module.scss';
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import React, { useState } from 'react';
import { normalizeObjText, propertyCopy, setArray } from '../../app/commonFunctions';
import { InputRange, InputNumber } from '../common/Input';

const DemoPosition = () => {
    const activeStyle = useAppSelector(selectDemo);

    const [inputQty, setQty] = useState(3);
    const [strLength, setLength] = useState(1);

    const childQty = inputQty;
    const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    const childInnerText = str.repeat(strLength);

    const parentStyle = propertyCopy(activeStyle.parent);
    const childStyle = propertyCopy(activeStyle.childItem);
    const parentText = normalizeObjText(parentStyle);
    const childText = normalizeObjText(childStyle);

    const childArray: Array<number> = [];

    setArray(childQty, childArray);

    return (
        <section className={"demo"}>
            <SectionTitle>Position of elements</SectionTitle>
            <header className={style.demo__description}>
                <Highlighted><Strong>CSS of parent: </Strong>{parentText}</Highlighted>
                <Highlighted><Strong>CSS of child: </Strong>{childText}</Highlighted>
            </header>
            <div className={style.demo__container__sticked}>
                <fieldset className={style.demo__settings}>
                    <legend><Strong>Settings</Strong></legend>
                    <label htmlFor="childQty"><Strong>set qty of child items   </Strong></label>
                    <InputNumber min="1" max="7" value={inputQty} name="childQty"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQty(Number(e.target.value))} />
                    <label htmlFor="strLength"><Strong>   set length of text into child items </Strong></label>
                    <InputRange min="0" max="5" value={strLength} name="strLength"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLength(Number(e.target.value))} />
                </fieldset>
                <div style={parentStyle} className={style.demo__parent}>
                    parent
                    {childArray.map((item) =>
                        <div key={item.toString()} style={childStyle} className={style.demo__child} >
                            <Strong>child #{item} </Strong>
                            {childInnerText}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default DemoPosition;