import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  variable1: '',
  variable2: '',
  variable3: '',
  variable4: '',
  variable5: '',
  query: '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setVariable1: (state, action) => {
      state.variable1 = action.payload;
    },
    setVariable2: (state, action) => {
      state.variable2 = action.payload;
    },
    setVariable3: (state, action) => {
      state.variable3 = action.payload;
    },
    setVariable4: (state, action) => {
      state.variable4 = action.payload;
    },
    setVariable5: (state, action) => {
      state.variable5 = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setVariable1, setVariable2, setVariable3, setVariable4, setVariable5, setQuery } = querySlice.actions;

export default querySlice.reducer;
