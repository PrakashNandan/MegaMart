import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchedLoggedInUserOrder } from './userAPI';

const initialState = {
  userOrders: null,
  status: 'idle',
};

export const fetchedLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchedLoggedInUserOrder',
  async (userId) => {
    const response = await fetchedLoggedInUserOrder(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
   
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchedLoggedInUserOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchedLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userOrders = action.payload;
      });
  },
});

export const { increment} = counterSlice.actions;

export const selectUserOrders = (state)=>state.user.userOrders;

export default counterSlice.reducer;
