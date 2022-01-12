import { useAppSelector } from '../../app/hooks';
import style from './DemoPosition.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import React, { useState } from 'react';
import { normalizeObjText, propertyCopy, setArray } from '../../app/functionStore';
import InputRange from '../common/Input';

const DemoPosition = (props) => {
    const activeStyle = useAppSelector(selectDemo);

    const [inputQty, setQty] = useState(3);
    const [strLength, setLength] = useState(3);

    const childQty = inputQty;
    const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    const childInnerText = str.repeat(strLength);

    const parentStyle = propertyCopy(activeStyle.parent);
    const childStyle = propertyCopy(activeStyle.childItem);
    const parentText = normalizeObjText(parentStyle);
    const childText = normalizeObjText(childStyle);

    const childArray = [];

    setArray(childQty, childArray);

    return (
        <section className={"demo"}>
            <SectionTitle>Position of elements</SectionTitle>
            <div className={style.fix}>
                <fieldset>
                    <legend><Strong>Settings</Strong></legend>
                    <label htmlFor="childQty"><Strong>set qty of child items   </Strong></label>
                    <input type="number" min="1" max="7" value={inputQty} name="childQty"
                        onChange={(e) => setQty(e.target.value)} />
                    <label htmlFor="strLength"><Strong>   set length of text into child items </Strong></label>
                    <InputRange type="range" min="0" max="5" value={strLength} name="strLength"
                        onChange={(e) => setLength(e.target.value)} />
                </fieldset>
                <Highlighted><Strong>CSS of parent: </Strong>{parentText}</Highlighted>
                <Highlighted><Strong>CSS of child: </Strong>{childText}</Highlighted>
                <div style={parentStyle}
                    className={style.parent}>parent
                    {childArray.map((item) =>
                        <div key={item} style={childStyle} className={style.child} >
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