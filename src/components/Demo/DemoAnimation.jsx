import { useAppSelector } from '../../app/hooks';
import style from './DemoAnimation.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { SectionTitle } from '../common/Typography';
import { useState } from 'react';
import AnimatedBlock from './AnimatedBlock';

const DemoAnimation = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1.properties;
    const [cancelStatus, setCancel] = useState(false);

    if (!activeDemoStatus) return <div>please choose option</div>

    const animationProperty = activeDemoStatus.name;
    const initValue = activeDemoStatus.initValue;
    const finalValue = activeDemoStatus.finalValue;

    const initialParam = {};
    const finalParam = {};
    initialParam[animationProperty] = initValue;
    finalParam[animationProperty] = finalValue;

    return (
        <section className={"demo"}>
            <SectionTitle>Animation</SectionTitle>
            <button className={style.button} onClick={() => setCancel(false)}>start</button>
            <button className={style.button} onClick={() => setCancel(true)}>stop</button>
            <div className={style.fix}>
                <p><b>Animated property: </b>{animationProperty}</p>
                <p><b>Initial value: </b>{initValue}</p>
                <p><b>Final value: </b>{finalValue}</p>
                <div className={style.parent}>
                    <AnimatedBlock
                        className={style.child}
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