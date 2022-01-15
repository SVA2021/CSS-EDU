import { useAppSelector } from '../../app/hooks';
import style from './Demo.module.scss';
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, Strong, SectionTitle, SubTitleUpperDark } from '../common/Typography';
import { arrayHandle } from '../../app/dataJS';
import ArrayElement from './ArrayElement';

const ArrayJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.arrayMethod;
    const method = activeDemoStatus.name;
    const target = activeDemoStatus.target;
    const initArray = activeDemoStatus.initial;
    const description = activeDemoStatus.description;
    const typeOfResult = activeDemoStatus.typeOfResult;
    const statusOfResult = activeDemoStatus.statusOfResult;

    const result = arrayHandle(method, initArray);

    return (
        <section className={"demo"}>
            <SectionTitle>Array method</SectionTitle>
            <header className={style.demo__description}>
                <Highlighted><Strong>Method: </Strong>{method}</Highlighted>
                <Highlighted><Strong>Description: </Strong>{description}</Highlighted>
                {(target) &&
                    <div className={style.demo__child__flexCentered}>
                        <Strong>target of searching</Strong>
                        <ArrayElement modified={true} />
                    </div>
                }
            </header>
            <div className={style.demo__container__sticked}>
                <div className={style.demo__parent}>
                    <SubTitleUpperDark>initial state</SubTitleUpperDark>
                    {initArray.map((item, index) =>
                        <ArrayElement key={(index).toString()} modified={item} index={index} />)}
                </div>
                <div className={style.demo__parent}>
                    <SubTitleUpperDark>result</SubTitleUpperDark>
                    <div className={style.demo__child__array}>
                        <p>
                            <Strong>returned result type: </Strong>
                            {statusOfResult} {typeOfResult}
                        </p>
                        <p>
                            <Strong>result: </Strong>
                            {result.toString()}
                        </p>
                    </div>
                    {(typeOfResult === 'array') &&
                        result.map((item, index) =>
                            <ArrayElement key={(index).toString()} modified={item} index={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ArrayJS;