import { useAppSelector } from '../../app/hooks';
import style from './DemoAnimation.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, SectionTitle, Strong } from '../common/Typography';
import { useState } from 'react';
import AnimatedBlock from './AnimatedBlock';

const DemoAnimation = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.properties;

    const [cancelStatus, setCancel] = useState(false);

    const animationProperty = activeDemoStatus?.name;
    const initValue = activeDemoStatus?.initValue;
    const finalValue = activeDemoStatus?.finalValue;
    const description = activeDemoStatus?.description;

    const initialParam = {};
    const finalParam = {};
    initialParam[animationProperty] = initValue;
    finalParam[animationProperty] = finalValue;

    return (
        <section className={"demo"}>
            <SectionTitle>Animation</SectionTitle>
            <div className={style.fix}>
                <button className={style.button} onClick={() => setCancel(false)}>start</button>
                <button className={style.button} onClick={() => setCancel(true)}>stop</button>
                <Highlighted><Strong>Animated property: </Strong>{animationProperty}</Highlighted>
                <Highlighted><Strong>Description: </Strong>{description}</Highlighted>
                <Highlighted>
                    <Strong>Initial value: </Strong>{initValue}
                    <Strong>     Final value: </Strong>{finalValue}
                </Highlighted>
                <div className={style.parent}>
                    <AnimatedBlock className={style.child}
                        name={animationProperty}
                        initialParam={initialParam}
                        finalParam={finalParam}
                        cancelStatus={cancelStatus}
                    />
                </div>
            </div>
        </section>
    )
}

export default DemoAnimation;