import { useSpring, animated } from 'react-spring';
import image from '../../img/OrangeCar.svg';
import { AnimatedPropsType } from './DemoAnimation';
import { usePrevious, isEmpty, getDiff } from '../../app/commonFunctions';

const BASE_STR = `Aspernatur ad mollitia, laudantium excepturi commodi architecto, aut at ab dolorem qui quo!`;

const AnimatedBlock = (props: AnimatedPropsType) => {

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
	let result: any = (!oldProps) ? propsAnimation : getDiff(oldProps, propsAnimation);

	if (!isEmpty(propsAnimation[animationProperty])) {
		result[animationProperty] = propsAnimation[animationProperty];
	}

	return (
		<animated.div className={props.className} style={result}>
			<p>{BASE_STR.repeat(2)}</p>
			<img src={image} alt="animated" width={'250px'} height={'auto'} style={{ aspectRatio: '250/72' }} />
			<p>{BASE_STR.repeat(5)}</p>
		</animated.div>
	)
}

export default AnimatedBlock;