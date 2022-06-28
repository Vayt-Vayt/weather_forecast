import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import InfoDayClock from './clockDay/InfoDayClock';
import ListWeather from './ListWeather';

const Routers = () => {
    return (
        <Routes>
            <Route path='/about' element={<ListWeather />} />
            <Route path='/info' element={<About />} />
            <Route path='/infoday' element={<InfoDayClock />} />
            <Route path="*" element={<Navigate replace to='about' />} />
        </Routes>
    );
};

export default Routers;
