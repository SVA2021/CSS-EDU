import { useAppSelector } from '../../app/hooks';
import style from './DemoPosition.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import React, { useState } from 'react';
import image from '../../img/OrangeCar.png';
import { normalizeObjText } from '../../app/functionStore';

const ImageFilter = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.filter;

    const [optionValue, setOptionValue] = useState(5);

    const activeFilter = activeDemoStatus?.name;
    const minValue = activeDemoStatus?.min;
    const maxValue = activeDemoStatus?.max;
    const unit = activeDemoStatus?.unit;

    const optionNumValue = optionValue * Math.round((maxValue - minValue) / 10);
    const optionStringValue =
        (activeFilter === 'drop-shadow')
            ? String(activeFilter) + '(' + String(optionNumValue) + unit + ' '
            + String(optionNumValue) + unit + ' ' + String(optionNumValue) + unit + ' #19283F )'
            : String(activeFilter) + '(' + String(optionNumValue) + unit + ')';
    const currentStyle = { filter: optionStringValue }
    const currentStyleTexted = normalizeObjText(currentStyle);
    return (
        <section className={"demo"}>
            <SectionTitle>Image filter</SectionTitle>
            <div className={style.fix}>
                <fieldset>
                    <legend><Strong>Settings</Strong></legend>
                    <label htmlFor="optionValue"><Strong>set option value</Strong></label>
                    <input type="range" min="0" max="10" value={optionValue} name="optionValue"
                        onChange={(e) => setOptionValue(e.target.value)} />
                </fieldset>
                <Highlighted><Strong>CSS: </Strong>{currentStyleTexted}</Highlighted>
                <Highlighted>
                    <Strong>min: </Strong>{minValue}{unit}
                    <Strong>     max: </Strong>{maxValue}{unit}
                </Highlighted>
                <div className={style.parent}>
                    <img src={image} style={currentStyle} alt="orange car" width={'600px'} />
                </div>
            </div>
        </section>
    )
}

export default ImageFilter;