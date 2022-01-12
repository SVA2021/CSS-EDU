import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import { SubTitleUpper } from '../common/Typography';
import { isEmpty } from '../../app/functionStore';
import ArrayJS from './ArrayJS';

const DemoJS = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1;

    if (isEmpty(activeDemoStatus)) return <SubTitleUpper>choose option in Settings</SubTitleUpper>;

    const activeOption = Object.keys(activeDemoStatus)[0];

    return (
        <>
            {/* <ArrayJS /> */}
            {(activeOption === 'arrayMethod') && <ArrayJS />}
            {(activeOption === 'stringFeatures') && <SubTitleUpper />}
            {/* {(activeOption === 'nfilter') && <SubTitleUpper />} */}
        </>
    )
}

export default DemoJS;