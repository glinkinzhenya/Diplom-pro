import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';
import MainRoute from './pages/MainRoute';


export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<MainRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
