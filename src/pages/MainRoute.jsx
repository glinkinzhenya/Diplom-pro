import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './MainPage/MainPage';
import Trainings from './Trainings/Trainings';
import SportPage from './SportPage/SportPage';
import Trainers from './Trainers/Trainers';
import Admin from './Admin/Admin';
import NotFound from './NotFound/NotFound';
import Start from './Start/Start';

export default function MainRoute() {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Start />} />
        {/* /edit фиксированный элемент */}
        <Route path='/trainings' element={<Trainings />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/admin' element={<Admin />} />
        {/* /:name плавающий элемент */}
        <Route path='/trainings/:name' element={<SportPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Main>
  );
}
