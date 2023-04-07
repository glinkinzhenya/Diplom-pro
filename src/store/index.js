import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { trainingsReducer } from './modules/trainings';
import { trainersReducer } from './modules/trainers';

const rootReducer = combineReducers({
  trainingsReducer,
  trainersReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
