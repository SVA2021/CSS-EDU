import { Route, Routes } from 'react-router-dom';
import DemoAnimation from '../Demo/DemoAnimation';
import DemoPosition from '../Demo/DemoPosition';
import DemoSelectors from '../Demo/DemoSelectors';
import Preloader from '../Preloader/Preloader';
import SideBar from '../Sidebar/SideBar';

const Main = () => {
    return (
        <>
            <SideBar />
            <Routes >
                <Route path="/" element={<Preloader />} />
                <Route path="/position" element={<DemoPosition />} />
                <Route path="/selectors" element={<DemoSelectors />} />
                <Route path="/animation" element={<DemoAnimation />} />
                <Route path="/features" element={<Preloader />} />
            </Routes>
        </>
    )
}

export default Main;