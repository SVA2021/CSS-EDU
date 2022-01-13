import { useAppSelector } from '../../app/hooks';
import style from './Gradient.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import React, { useState } from 'react';
import { normalizeObjText } from '../../app/functionStore';
import {InputRange} from '../common/Input.jsx';

const Gradient = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.gradient;

    const [angle, setAngle] = useState(6);
    const [startColorPos, setStartColorPos] = useState(0);
    const [endColorPos, setEndColorPos] = useState(10);
    const [posX, setX] = useState(10);
    const [posY, setY] = useState(10);

    const activeOption = activeDemoStatus?.name;
    let angleCSS = "";
    if (activeDemoStatus.id < 3) angleCSS = String(angle * 15) + "deg , ";
    if (activeDemoStatus.id > 4) angleCSS = "from " + String(angle * 15) + "deg ";
    let positionXY = "";
    if (activeDemoStatus.id > 2) positionXY = "at " + String(posX * 5) + "% " + String(posY * 5) + "%, ";
    const startColorPositionCSS = String(startColorPos * 5) + "%";
    const endColorPositionCSS = String(endColorPos * 5) + "%";
    const gradientCSS = " " + activeOption + "( "
        + angleCSS + positionXY
        + "blue " + startColorPositionCSS + ", red " + endColorPositionCSS + ") ";

    const currentStyle = { background: gradientCSS };
    const currentStyleTexted = normalizeObjText(currentStyle);
    return (
        <section className={"demo"}>
            <SectionTitle>Gradient</SectionTitle>
            <div className={style.fix}>
                <div className={style.form}>
                    <fieldset>
                        <legend><Strong>Direction</Strong></legend>
                        <label htmlFor="angle"><Strong>set direction angle</Strong></label>
                        <InputRange min="0" max="24" value={angle} name="angle"
                            onChange={(e) => setAngle(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend><Strong>Color Positions</Strong></legend>
                        <label htmlFor="startColorPos"><Strong>set startColor</Strong></label>
                        <InputRange min="0" max="20" value={startColorPos} name="startColorPos"
                            onChange={(e) => setStartColorPos(e.target.value)} />
                        <label htmlFor="endColorPos"><Strong>set endColor</Strong></label>
                        <InputRange min="0" max="20" value={endColorPos} name="endColorPos"
                            onChange={(e) => setEndColorPos(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend><Strong>Set XY Position</Strong></legend>
                        <label htmlFor="x"><Strong>set X position</Strong></label>
                        <InputRange min="0" max="20" value={posX} name="x"
                            onChange={(e) => setX(e.target.value)} />
                        <label htmlFor="y"><Strong>set Y position</Strong></label>
                        <InputRange min="0" max="20" value={posY} name="y"
                            onChange={(e) => setY(e.target.value)} />
                    </fieldset>
                </div>
                <Highlighted><Strong>CSS: </Strong>{currentStyleTexted}</Highlighted>
                <div className={style.main} style={currentStyle}></div>
            </div>
        </section>
    )
}

export default Gradient;