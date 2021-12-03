import React from 'react';
import { Route, Routes } from 'react-router';
import Position from '../Position/Position';
import Preloader from '../Preloader/Preloader';

const Main = () => {
    return (
            <Routes>
                <Route path="/" element={<Preloader />} />
                <Route path="/position" element={<Position />} />
                <Route path="/selectors" element={<Preloader />} />
                <Route path="/animation" element={<Preloader />} />
                <Route path="/features" element={<Preloader />} />
            </Routes>
    )
}

export default Main;