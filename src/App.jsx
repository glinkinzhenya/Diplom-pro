import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoute from './pages/MainRoute';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
