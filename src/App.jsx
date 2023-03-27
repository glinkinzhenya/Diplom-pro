import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import NextPage from './components/NextPage';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/test/*' element={<NextPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
