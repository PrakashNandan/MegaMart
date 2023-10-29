import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchedLoggedInUser, fetchedLoggedInUserOrder, updateUser } from './userAPI';

const initialState = {
  status: 'idle',
  userInfo:null,
};

export const fetchedLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchedLoggedInUserOrder',
  async () => {
    const response = await fetchedLoggedInUserOrder();
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
  async () => {
    const response = await fetchedLoggedInUser();
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
        state.userInfo.orders = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // earlier there was loggedinUser in other slice
        state.userInfo = action.payload;
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

export const selectUserOrders = (state)=>state.user.userInfo.orders;
export const selectUserInfo = (state)=>state.user.userInfo;

export default counterSlice.reducer;
