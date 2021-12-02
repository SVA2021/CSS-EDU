import React from 'react';
import { Route, Routes } from 'react-router';
import Preloader from '../Preloader/Preloader';
import Demo from './Demo';
import SideBar from './SideBar';

const Main = () => {
    return (
            <Routes>
                <Route path="/" element={<Preloader />} />
                <Route path="/selectors" element={<Preloader />} />
                <Route path="/position" element={<Preloader />} />
                <Route path="/animation" element={<Preloader />} />
                <Route path="/features" element={<Preloader />} />
            </Routes>
    )
}

export default Main;