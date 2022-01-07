import { useSpring, animated } from 'react-spring';
import { usePrevious, isEmpty, getDiff } from '../../app/functionStore.js';

const AnimatedBlock = (props) => {

  const animationProperty = props.name;
  const initialParam = props.initialParam;
  const finalParam = props.finalParam;
  const cancelStatus = props.cancelStatus;

  const animationTime = 1000;

  const propsAnimation = useSpring({
    from: initialParam,
    to: finalParam,
    config: { duration: animationTime, },
    loop: { reverse: true },
    cancel: cancelStatus,
  }
  );

  let oldProps = usePrevious(propsAnimation);
  let result = (!oldProps) ? propsAnimation : getDiff(oldProps, propsAnimation);

  if (!isEmpty(propsAnimation[animationProperty])) {
    result[animationProperty] = propsAnimation[animationProperty];
  }

  return (
    <animated.div className={props.className} style={result}>{animationProperty}</animated.div>
  )
}

export default AnimatedBlock;