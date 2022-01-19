import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import { isEmpty } from '../../app/commonFunctions';
// import { isEmpty } from '../../app/functionStore';
import ArrayJS from './ArrayJS';
import StringJS from './StringJS';
import DemoBlank from './DemoBlank';

const DemoJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1;

    if (isEmpty(activeDemoStatus)) return <DemoBlank/>

    const activeOption = Object.keys(activeDemoStatus)[0];

    return (
        <>
            {(activeOption === 'arrayMethod') && <ArrayJS />}
            {(activeOption === 'stringFeatures') && <StringJS />}
        </>
    )
}

export default DemoJS;