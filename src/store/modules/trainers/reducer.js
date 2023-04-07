import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

const initialState = {
  trainers: [],
};

// const (data, setData) = useState([]);
// setData(5);

/* eslint-disable no-param-reassign */
export const trainersSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchTrainers.fulfilled, (state, { payload }) => {
      state.trainers = payload;
    });
  },
});

export default trainersSlice.reducer;
