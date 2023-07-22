import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterUse(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReduser = filterSlice.reducer;

export const { filterUse } = filterSlice.actions;
