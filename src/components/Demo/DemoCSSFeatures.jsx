import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import { SubTitleUpper } from '../common/Typography';
// import React from 'react';
import { isEmpty } from '../../app/functionStore';
import ImageFilter from './ImageFilter';
import Gradient from './Gradient';

const DemoCSSFeatures = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = activeStyle.part1;

    if (isEmpty(activeDemoStatus)) return <SubTitleUpper>choose option in Settings</SubTitleUpper>;
    return (Object.keys(activeDemoStatus)[0] === 'filter') ? <ImageFilter /> : <Gradient />
}

export default DemoCSSFeatures;