import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/pageList/ProductListSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
  },
});
