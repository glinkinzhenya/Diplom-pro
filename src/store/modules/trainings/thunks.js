import { createAsyncThunk } from '@reduxjs/toolkit';
import { classes } from '../../../api';
import { moduleName } from './constant';

const fetchTrainings = createAsyncThunk(`${moduleName}/fetchTrainings`, async () => {
  const { data } = await classes.fetch();

  return data;
});

export default {
  fetchTrainings,
};
