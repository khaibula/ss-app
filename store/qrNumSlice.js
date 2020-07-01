import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

export const fetchQrNum = createAsyncThunk('qrNum/fetch', () => {
  return api
    .get('qr/count')
    .json()
    .then(r => Number(r.payload));
});
export const qrNumSlice = createSlice({
  name: 'qrNum',
  initialState: {
    isLoading: false,
    value: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchQrNum.pending]: state => {
      state.isLoading = true;
    },
    [fetchQrNum.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    },
    [fetchQrNum.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const selectQrNum = state => state.qrNum.value;
export const selectQrNumIsLoading = state => state.qrNum.isLoading;
