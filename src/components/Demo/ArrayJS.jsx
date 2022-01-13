import { useAppSelector } from '../../app/hooks';
import style from './ArrayJS.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, Strong, SubTitleUpper } from '../common/Typography';
import { arrayHandle } from '../../app/dataJS';

const ArrayElement = (props) => {
    const index = props.index;
    const status = (props.modified) ? style.modified : style.original;
    return (
        <div className={status}>{index}</div>
    )
}

const ArrayJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.arrayMethod;
    const initArray = activeDemoStatus.initial;
    const method = activeDemoStatus.name;
    const description = activeDemoStatus.description;
    const typeOfResult = activeDemoStatus.typeOfResult;
    const statusOfResult = activeDemoStatus.statusOfResult;
    const target = activeDemoStatus.target;

    const result = arrayHandle(method, initArray);

    return (
        <section className={"demo"}>
            <header>
                <SubTitleUpper>Array method</SubTitleUpper>
                <Highlighted><Strong>method: </Strong>{method}</Highlighted>
                <Highlighted><Strong>description: </Strong>{description}</Highlighted>
            </header>

            <div className={style.fix}>
                <div className={style.parent}>
                    <SubTitleUpper>initial state</SubTitleUpper>
                    {initArray.map((item, index) => <ArrayElement key={(index).toString()} modified={item} />)}
                </div>
                <div className={style.parent}>
                    <SubTitleUpper>final state</SubTitleUpper>
                    <Highlighted><Strong>returned result type: </Strong>{statusOfResult} array</Highlighted>
                    {(target) &&
                        <div><Strong>target of searching</Strong> <ArrayElement modified={true} /></div>}
                    {(typeOfResult === 'array')
                        ? result.map((item, index) =>
                            <ArrayElement key={(index).toString()} modified={item} index={index} />)
                        : <div className={style.parent}>
                            <div className={style.result}><Strong>result: </Strong>{result.toString()}</div>
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default ArrayJS;