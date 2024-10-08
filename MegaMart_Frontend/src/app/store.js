import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/pageList/ProductListSlice'
import authReducer from '../features/auth/authSlice'
import cartReducedr from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    auth:authReducer,
    cart:cartReducedr,
    order:orderReducer,
    user : userReducer
  },
});
