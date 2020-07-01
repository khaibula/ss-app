import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

export const sendQrCode = createAsyncThunk('qr/sendQrCode', ({ qrString, onRes }) =>
  api
    .post('qr', {
      json: {
        qrString,
      },
    })
    .json()
    .then(r => {
      if (r.payload) {
        onRes();
        return r.payload;
      } else {
        throw Object.values(r)[0];
      }
    })
);

const initialState = {
  isScanned: false,
  isLoading: false,
  error: undefined,
};

export const qrSlice = createSlice({
  name: 'qr',
  initialState,
  reducers: {
    dampQr: state => {
      state.isScanned = false;
      state.error = undefined;
    },
    qrScanned: state => {
      state.isScanned = true;
    },
  },
  extraReducers: {
    [sendQrCode.pending]: state => {
      state.isLoading = true;
    },
    [sendQrCode.fulfilled]: state => {
      state.isLoading = false;
    },
    [sendQrCode.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const qrSelectors = {
  selectCanScan: state => !state.qr.isScanned,
  selectIsLoading: state => state.qr.isLoading,
  selectIsError: state => Boolean(state.qr.error),
  selectError: state => state.qr.error,
};

export const scanQr = (qrData, onRes) => (dispatch, getState) => {
  console.log(qrData.data)
  const qrString =  'https://test.ru/123?fn=123456&fp=12345678&fd=1234569&s=40';//qrData.data;
  const canScan = qrSelectors.selectCanScan(getState());
  if (!canScan) return;
  dispatch(qrSlice.actions.qrScanned());
  dispatch(sendQrCode({ qrString, onRes }));
};
