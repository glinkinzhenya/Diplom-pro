import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridTemplate from './MainPage/MainPage';
import Main from './Trainings/Trainings';
import NameNextPage from './SportPage/SportPage';
import Trainers from './Trainers/Trainers';

export default function NextPage() {
  return (
    <GridTemplate>
      <Routes>
        {/* <Route index element={<Main />} path='/test' /> */}
        <Route index element={<Main />} path='/' />

        {/* /edit фиксированный элемент */}
        <Route path='/edit' element={<>Test text edit</>} />

        {/* /:name плавающий элемент */}
        <Route path='/:name' element={<NameNextPage />} />

        {/* /:name плавающий элемент */}
        <Route path='/trainers' element={<Trainers />} />
      </Routes>
    </GridTemplate>
  );
}
