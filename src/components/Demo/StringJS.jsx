import { useAppSelector } from '../../app/hooks';
import style from './ArrayJS.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, Strong, SubTitleUpper } from '../common/Typography';
import { arrayHandle } from '../../app/dataJS';
import { useState } from 'react';

const StringJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.stringFeatures;
    const method = activeDemoStatus.name;
    const description = activeDemoStatus.description;

    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [length, setLength] = useState(null);

    const initString = ' start AnYLetteRS end ';



    const result = arrayHandle(initString, method, start, end, length);

    return (
        <section className={"demo"}>
            <header>
                <SubTitleUpper>String method</SubTitleUpper>
                <Highlighted><Strong>method: </Strong>{method}</Highlighted>
                <Highlighted><Strong>description: </Strong>{description}</Highlighted>
                {/* <fieldset>
                    <legend><Strong>Settings</Strong></legend>
                    <label htmlFor="childQty"><Strong>set qty of child items   </Strong></label>
                    <input type="number" min="1" max="7" value={inputQty} name="childQty"
                        onChange={(e) => setQty(e.target.value)} />
                    <label htmlFor="strLength"><Strong>   set length of text into child items </Strong></label>
                    <InputRange type="range" min="0" max="5" value={strLength} name="strLength"
                        onChange={(e) => setLength(e.target.value)} />
                </fieldset> */}
            </header>

            <div className={style.fix}>
                <div className={style.parent}>
                    <SubTitleUpper>initial state</SubTitleUpper>
                </div>
                <div className={style.parent}>
                    <SubTitleUpper>final state</SubTitleUpper>
                </div>
            </div>
        </section>
    )
}

export default StringJS;