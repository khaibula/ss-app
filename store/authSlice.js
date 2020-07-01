import { createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

const initialState = {
  phone: '',
  password: '',
  token: '',
  inChange: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
    logout: (state, action) => {
      state.password = '';
    },
    setToken: (state, action) => {
      state.inChange = false;
      state.token = action.payload;
    },
    changePassword: state => {
      state.inChange = true;
    },
  },
});

export const getInitParams = () => async dispatch => {
  if (SecureStore) {
    const [password, phone] = await Promise.all([
      SecureStore.getItemAsync('password'),
      SecureStore.getItemAsync('phone'),
    ]);
    dispatch(authSlice.actions.login({ password, phone }))
  }
};

export const asyncLogin = ({ password, phone, token }) => async dispatch => {
  if (SecureStore) {
    await Promise.all([SecureStore.setItemAsync('password', password), SecureStore.setItemAsync('phone', phone)]);
  }
  dispatch(authSlice.actions.setToken(token));
  dispatch(authSlice.actions.login({ password, phone }));
};
export const asyncLogout = () => async dispatch => {
  if (SecureStore) {
    await Promise.all([SecureStore.setItemAsync('password', ''), SecureStore.setItemAsync('phone', '')]);
  }
  dispatch(authSlice.actions.logout({ password }));
};

export const selectIsLogin = state => state.auth.password;
export const selectPhone = state => state.auth.phone;
export const selectIsChangingPassword = state => state.auth.inChange;
