import { createAsyncThunk } from '@reduxjs/toolkit';
import { trainers } from '../../../api';
import { moduleName } from './constant';

const fetchTrainers = createAsyncThunk(`${moduleName}/fetchTrainers`, async () => {
  const { data } = await trainers.fetch();
  return data;
});

export default {
  fetchTrainers,
};
