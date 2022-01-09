import { useSpring, animated } from 'react-spring';
import { usePrevious, isEmpty, getDiff } from '../../app/functionStore.js';
import image from '../../img/OrangeCar.png';

const AnimatedBlock = (props) => {

  const animationProperty = props.name;
  const initialParam = props.initialParam;
  const finalParam = props.finalParam;
  const cancelStatus = props.cancelStatus;

  const animationTime = 1500; //dynamic change by input make SPA unstable

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
    <animated.div className={props.className} style={result}>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <p>Ab maiores dolore quos autem vitae alias, quaerat facilis? </p>
      <img src={image} alt="animated" width={'250px'} height={'auto'} />
      <p>
        Aspernatur ad mollitia, laudantium excepturi commodi architecto, aut at ab dolorem qui quo!
        Aspernatur ad mollitia, laudantium excepturi commodi architecto, aut at ab dolorem qui quo!
        Aspernatur ad mollitia, laudantium excepturi commodi architecto, aut at ab dolorem qui quo!
        Aspernatur ad mollitia, laudantium excepturi commodi architecto, aut at ab dolorem qui quo!
        Aspernatur ad mollitia, laudantium excepturi commodi architecto, aut at ab dolorem qui quo!
      </p>
    </animated.div>
  )
}

export default AnimatedBlock;