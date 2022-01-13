import { useAppSelector } from '../../app/hooks';
import style from './ArrayJS.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, Strong, SubTitleUpper } from '../common/Typography';
import { stringHandle } from '../../app/dataJS';
import { useState } from 'react';
import { InputNumber } from '../common/Input';

const StringJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.stringFeatures;
    const method = activeDemoStatus.name;
    const id = activeDemoStatus.id;
    const description = activeDemoStatus.description;

    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    const initString = ` start AnYLetteRS end `;

    let startDescription, resultDescription;
    if (id === 6) startDescription = 'set char position';
    if (id === 7) {
        startDescription = 'set repeat qty';
    } else {
        startDescription = 'set start position ';
    }
    let endDescription = (id === 11) ? 'set length ' : 'set end position ';

    const result = stringHandle(initString, method, start, end);
    if (id === 4 || id === 5 || id === 8) {
        resultDescription = result.toString();
    } else {
        resultDescription = result;
    }
    
    return (
        <section className={"demo"}>
            <header>
                <SubTitleUpper>String methods</SubTitleUpper>
                <Highlighted><Strong>method: </Strong>{method}</Highlighted>
                <Highlighted><Strong>description: </Strong>{description}</Highlighted>
                <fieldset>
                    <legend><Strong>Settings</Strong></legend>
                    {(id >= 5) &&
                        <>
                            <label htmlFor="start"><Strong>{startDescription}</Strong></label>
                            <InputNumber min="0" max="9" value={start} name="start"
                                onChange={(e) => setStart(e.target.value)} />
                        </>}
                    {(id >= 10) &&
                        <>
                            <label htmlFor="end"><Strong>{endDescription}</Strong></label>
                            <InputNumber min="0" max="9" value={end} name="end"
                                onChange={(e) => setEnd(e.target.value)} />
                        </>}
                </fieldset>
            </header>

            <div className={style.fix}>
                <div className={style.parent}>
                    <SubTitleUpper>initial state</SubTitleUpper>
                    <div className={style.result}>{initString}</div>
                </div>
                <div className={style.parent}>
                    <SubTitleUpper>final state</SubTitleUpper>
                    <div className={style.result}>{resultDescription}</div>
                </div>
            </div>
        </section>
    )
}

export default StringJS;