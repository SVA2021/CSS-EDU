import { useSpring, animated } from 'react-spring'

const AnimatedBlock = (props) => {
    const animationProperty = props.name;
    const initialParam = props.initialParam;
    const finalParam = props.finalParam;
    const cancelStatus = props.cancelStatus;

    const animationTime = 3000;
    const loopStatus = true;

    const propsAnimation = useSpring({
        to: initialParam,
        from: finalParam,
        config: { duration: animationTime },
        loop: loopStatus,
        cancel: cancelStatus,
    });

    return (
        <animated.div style={propsAnimation}>{animationProperty}</animated.div>
    )
}

export default AnimatedBlock;