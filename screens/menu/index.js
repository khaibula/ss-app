import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import MenuRES from './menu_res/index.js';
import MenuREJ from './menu_rej/index.js';
// import Menu from './menu.js';
import setNumber from '../../actions/setNumber.js';
import { selectIsChangingPassword, selectIsLogin } from '../../store/authSlice';

function Menu(props) {
  const isLogin = useSelector(selectIsLogin);
  const changingPassword = useSelector(selectIsChangingPassword);
  return !isLogin || changingPassword ? <MenuREJ {...props} /> : <MenuRES {...props} />;
}

export default Menu;
