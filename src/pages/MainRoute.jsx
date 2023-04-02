import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './MainPage/MainPage';
import Trainings from './Trainings/Trainings';
import SportPage from './SportPage/SportPage';
import Trainers from './Trainers/Trainers';

export default function MainRoute() {
  return (
    <Main>
      <Routes>
        <Route index element={<Trainings />} path='/'/>
        {/* /edit фиксированный элемент */}
        <Route path='/trainings' element={<Trainings />} />
        <Route path='/trainers' element={<Trainers />} />

        {/* /:name плавающий элемент */}
        <Route path='/trainings/:name' element={<SportPage />} />
      </Routes>
    </Main>
  );
}
