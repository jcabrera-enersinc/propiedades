import { configureStore } from "@reduxjs/toolkit";
import queryReducer from '../features/forms/querySlice';

export const store = configureStore({
  reducer: {
    query: queryReducer,
  },
});