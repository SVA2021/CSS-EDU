import { useAppSelector } from '../../app/hooks';
import style from './Demo.module.scss';
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import React, { useState } from 'react';
import image from '../../img/OrangeCar.svg';
import { normalizeObjText } from '../../app/functionStore';
import { InputRange } from '../common/Input';

const ImageFilter = () => {
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
            <header className={style.demo__description}>
                <Highlighted><Strong>CSS: </Strong>{currentStyleTexted}</Highlighted>
                <Highlighted>
                    <Strong>min: </Strong>{minValue}{unit}
                    <Strong>     max: </Strong>{maxValue}{unit}
                </Highlighted>
            </header>
            <div className={style.demo__container__sticked}>
                <fieldset className={style.demo__settings}>
                    <legend><Strong>Settings</Strong></legend>
                    <label htmlFor="optionValue"><Strong>set option value</Strong></label>
                    <InputRange type="range" min="0" max="10" value={optionValue} name="optionValue"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOptionValue(Number(e.target.value))} />
                </fieldset>
                <div className={style.demo__parent}>
                    <img src={image} style={currentStyle} alt="orange car" width={'600px'} />
                </div>
            </div>
        </section>
    )
}

export default ImageFilter;