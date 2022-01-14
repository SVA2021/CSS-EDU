import { useAppSelector } from '../../app/hooks';
import style from './Gradient.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import React, { useState } from 'react';
import { normalizeObjText } from '../../app/functionStore';
import { InputRange } from '../common/Input.jsx';

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
    const id = activeDemoStatus.id;
    if (id < 3) angleCSS = String(angle * 15) + "deg , ";
    if (id > 4) angleCSS = "from " + String(angle * 15) + "deg ";
    let positionXY = "";
    if (id > 2) positionXY = "at " + String(posX * 5) + "% " + String(posY * 5) + "%, ";
    const startColorPositionCSS = String(startColorPos * 5) + "%";
    const endColorPositionCSS = String(endColorPos * 5) + "%";
    const gradientCSS = " " + activeOption + "( "
        + angleCSS + positionXY
        + "blue " + startColorPositionCSS + ", red " + endColorPositionCSS + ") ";

    const currentStyle = { background: gradientCSS };
    const currentStyleTexted = normalizeObjText(currentStyle);

    const showDirectionField = (id === 3 || id === 4);
    const showPositionField = (id < 3);
    return (
        <section className={"demo"}>
            <SectionTitle>Gradient</SectionTitle>
            <header className={style.demo__description}>
                <Highlighted><Strong>CSS: </Strong>{currentStyleTexted}</Highlighted>
            </header>

            <div className={style.demo__container__sticked}>
                <div className={style.form}>
                    <fieldset className={style.demo__settings}>
                        <legend><Strong>Color Positions</Strong></legend>
                        <label htmlFor="startColorPos"><Strong>set startColor</Strong></label>
                        <InputRange min="0" max="20" value={startColorPos} name="startColorPos"
                            onChange={(e) => setStartColorPos(e.target.value)} />
                        <label htmlFor="endColorPos"><Strong>set endColor</Strong></label>
                        <InputRange min="0" max="20" value={endColorPos} name="endColorPos"
                            onChange={(e) => setEndColorPos(e.target.value)} />
                    </fieldset>
                    {!showDirectionField && <fieldset className={style.demo__settings} hidden={showDirectionField}>
                        <legend><Strong>Direction</Strong></legend>
                        <label htmlFor="angle"><Strong>set direction angle</Strong></label>
                        <InputRange min="0" max="24" value={angle} name="angle"
                            onChange={(e) => setAngle(e.target.value)} />
                    </fieldset>}
                    <fieldset className={style.demo__settings} hidden={showPositionField}>
                        <legend><Strong>Set XY Position</Strong></legend>
                        <label htmlFor="x"><Strong>set X position</Strong></label>
                        <InputRange min="0" max="20" value={posX} name="x"
                            onChange={(e) => setX(e.target.value)} />
                        <label htmlFor="y"><Strong>set Y position</Strong></label>
                        <InputRange min="0" max="20" value={posY} name="y"
                            onChange={(e) => setY(e.target.value)} />
                    </fieldset>
                </div>
                <div className={style.gradient} style={currentStyle}></div>
            </div>
        </section>
    )
}

export default Gradient;