import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchedLoggedInUser, fetchedLoggedInUserOrder, updateUser } from './userAPI';

const initialState = {
  userOrders: null,
  status: 'idle',
  userInfo:null,
};

export const fetchedLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchedLoggedInUserOrder',
  async (userId) => {
    const response = await fetchedLoggedInUserOrder(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const fetchedLoggedInUserAsync = createAsyncThunk(
  'user/fetchedLoggedInUser',
  async (update) => {
    const response = await fetchedLoggedInUser(update);
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
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userOrders = action.payload;
      })
      .addCase(fetchedLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchedLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo = action.payload;
      })
  },
});

export const { increment} = counterSlice.actions;

export const selectUserOrders = (state)=>state.user.userOrders;
export const selectUserInfo = (state)=>state.user.userInfo;

export default counterSlice.reducer;
