import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constant';

const filterTrainings = createAction(`${moduleName}/filterTrainings`, (payload) => ({ payload }));

export default {
  filterTrainings,
};
