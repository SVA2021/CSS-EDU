import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import { isEmpty } from '../../app/functionStore';
import ImageFilter from './ImageFilter';
import Gradient from './Gradient';
import DemoBlank from './DemoBlank';

const DemoCSSFeatures = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1;

    if (isEmpty(activeDemoStatus)) return <DemoBlank />;

    return (
        <>
            {(Object.keys(activeDemoStatus)[0] === 'filter') && <ImageFilter />}
            {(Object.keys(activeDemoStatus)[0] === 'gradient') && <Gradient />}
        </>
    )
}

export default DemoCSSFeatures;