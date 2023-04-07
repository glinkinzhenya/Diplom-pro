import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';
import { moduleName } from './constant';
import thunks from './thunks';

const initialState = {
  trainings: [],
  filterTrainings: [],
};

/* eslint-disable no-param-reassign */
export const trainingsSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterTrainings, (state, { payload }) => {
      if (payload.search === '') {
        state.filterTrainings = state.trainings;
      } else {
        state.filterTrainings = state.trainings.filter((training) => training.name.toLowerCase().indexOf(payload.search.toLowerCase()) >= 0);
      }
    });
    builder.addCase(thunks.fetchTrainings.fulfilled, (state, { payload }) => {
      state.trainings = payload;
    });
  },
});

export default trainingsSlice.reducer;
