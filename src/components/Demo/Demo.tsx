import { Route, Routes } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import DemoPosition from './DemoPosition';
import DemoSelectors from './DemoSelectors';
import DemoAnimation from './DemoAnimation';
import DemoCSSFeatures from './DemoCSSFeatures';
import DemoJS from './DemoJS';

const Demo = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<Preloader />} />
                <Route path="/position" element={<DemoPosition />} />
                <Route path="/selectors" element={<DemoSelectors />} />
                <Route path="/animation" element={<DemoAnimation />} />
                <Route path="/css-features" element={<DemoCSSFeatures />} />
                <Route path="/js" element={<DemoJS />} />
            </Routes>
        </>
    )
}

export default Demo;