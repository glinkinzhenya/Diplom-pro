import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import NextPage from './pages/NextPage';
import Trainers from './components/Templates/Main/Trainers/Trainers';
// import GridTemplate from './pages/GridTemplate';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<NextPage />} path='/' />
          <Route path='*' element={<NotFound />} />
          <Route path='/gym_team/*' element={<NextPage />} />
          <Route path='/gym_team/*' element={<Trainers />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
