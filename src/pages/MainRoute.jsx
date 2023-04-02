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
        {/* <Route index element={<Main />} path='/test' /> */}
        <Route index element={<Trainings />} />

        {/* /edit фиксированный элемент */}
        <Route path='/edit' element={<>Test text edit</>} />

        {/* /:name плавающий элемент */}
        <Route path='/trainings/:name' element={<SportPage />} />

        <Route path='/trainings' element={<Trainings />} />

        {/* /:name плавающий элемент */}
        <Route path='/trainers' element={<Trainers />} />
      </Routes>
    </Main>
  );
}
