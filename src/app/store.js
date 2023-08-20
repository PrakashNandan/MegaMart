import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/pageList/ProductListSlice'
import authReducer from '../features/auth/authSlice'
import cartReducedr from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    auth:authReducer,
    cart:cartReducedr,
  },
});
