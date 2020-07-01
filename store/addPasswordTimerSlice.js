import { createSlice } from '@reduxjs/toolkit';

export const addPasswordTimerSlice = createSlice({
  name: 'addPasswordTimer',
  initialState: 0,
  reducers: {
    tick: state => Math.max(state - 1, 0),
    setTimer: (state, action) => action.payload,
  },
});

let interval = undefined;
export const setTimer = time => (dispatch, getState) => {
  if (interval) {
    clearInterval(interval);
  }
  dispatch(addPasswordTimerSlice.actions.setTimer(time));
  interval = setInterval(() => {
    const time = selectAddPasswordTimer(getState());
    if (time > 0) {
      dispatch(addPasswordTimerSlice.actions.tick());
    } else {
      clearInterval(interval);
      interval = undefined;
    }
  }, 1000);
};

export const selectAddPasswordTimer = state => state.addPasswordTimer;
