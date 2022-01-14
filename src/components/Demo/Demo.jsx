import { Route, Routes } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import DemoPosition from '../Demo/DemoPosition';
import DemoSelectors from '../Demo/DemoSelectors';
import DemoAnimation from '../Demo/DemoAnimation';
import DemoCSSFeatures from '../Demo/DemoCSSFeatures';
import DemoJS from '../Demo/DemoJS';

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