import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './MainPage/MainPage';
import Trainings from './Trainings/Trainings';
import SportPage from './SportPage/SportPage';
import Trainers from './Trainers/Trainers';
import Admin from './Admin/Admin';
import AddForm from './AddForm/AddForm';
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
        <Route path='/admin/4hg874hg8h45g85hg848g47gh4hyth4ythvy4thg8yh5g784h578heyubvyurbvubs' element={<AddForm />} />
        {/* /:name плавающий элемент */}
        <Route path='/trainings/:name' element={<SportPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Main>
  );
}
