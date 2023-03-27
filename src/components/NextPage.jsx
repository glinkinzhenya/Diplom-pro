import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridTemplate from './GridTemplate';
import Main from './Templates/Main/Main';
import NameNextPage from './NameNextPage';

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
      </Routes>
    </GridTemplate>
  );
}
