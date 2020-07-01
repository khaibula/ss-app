import React from 'react';

import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { GlobalScreens } from './globalScreens';

export default function App(props) {
  return (
    <Provider store={store}>
      <GlobalScreens />
    </Provider>
  );
}
