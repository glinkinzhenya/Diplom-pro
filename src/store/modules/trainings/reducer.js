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
    builder.addCase(thunks.fetchTrainings.fulfilled, (state, { payload }) => {
      state.trainings = payload;
      state.filterTrainings = payload;
    });
    builder.addCase(actions.filterTrainings, (state, { payload }) => {
      if (payload.search.length < 2) {
        state.trainings = state.filterTrainings;
      } else if (payload.search.length >= 2) {
        state.trainings = state.trainings.filter((training) => training.name.toLowerCase().indexOf(payload.search.toLowerCase()) >= 0);
      }
    });
  },
});

export default trainingsSlice.reducer;
