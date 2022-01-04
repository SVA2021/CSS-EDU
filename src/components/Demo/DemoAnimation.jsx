import { useAppSelector } from '../../app/hooks';
import style from './DemoAnimation.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { SectionTitle } from '../common/Typography';
import { useState } from 'react';

import { useSpring, animated } from 'react-spring'


const DemoAnimation = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const [cancelStatus, setCancel] = useState(false);

    const animationProperty = 'padding';
    const initValue = '10px';
    const finalValue = '30px';

    const initialParam = {};
    const finalParam = {};
    initialParam[animationProperty] = initValue;
    finalParam[animationProperty] = finalValue;

    const description = JSON.stringify(activeStyle.part1);// change 
    const animationTime = 3000;
    let loopStatus = true;

    const propsAnimation = useSpring({
        to: initialParam,
        from: finalParam,
        config: { duration: animationTime },
        loop: loopStatus,
        cancel: cancelStatus,
    });

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
                    <animated.div className={style.child} style={propsAnimation}>
                        {description}
                    </animated.div>
                </div>
            </div>

        </section>
    )
}

export default DemoAnimation;