import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';
const initialState = {
  id: undefined,
  start: undefined,
  end: undefined,
  isLoading: false,
  error: undefined,
};

export const fetchDrawNow = createAsyncThunk('fetchDrawNow', () =>
  api
    .get('draw/now')
    .json()
    .then(r => {
      if (r.NotDrawNow) {
        throw r.NotDrawNow;
      } else {
        return r.payload;
      }
    })
);

export const drawNowSlice = createSlice({
  name: 'drawNow',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDrawNow.pending]: state => {
      state.isLoading = true;
    },
    [fetchDrawNow.fulfilled]: (state, { payload: { start, end, id } }) => ({
      error: undefined,
      isLoading: false,
      start,
      end,
      id,
    }),
    [fetchDrawNow.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const selectDrawError = state => state.drawNow.error;
export const selectDrawEnd = state => state.drawNow.end && new Date(state.drawNow.end);
