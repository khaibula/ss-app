import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { contentSlice } from './contentSlice';
import { addPasswordTimerSlice } from './addPasswordTimerSlice';
import { qrNumSlice } from './qrNumSlice';
import { drawNowSlice } from './drawNowSlice';
import { qrSlice } from './qrSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  content: contentSlice.reducer,
  addPasswordTimer: addPasswordTimerSlice.reducer,
  qrNum: qrNumSlice.reducer,
  drawNow: drawNowSlice.reducer,
  qr: qrSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
