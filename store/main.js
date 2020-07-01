import { combineReducers } from 'redux';
// import ui from './ui.js';
import cloneDeep from "clone-deep";
import * as reducerTypes from "../actions/types"
export {reducerTypes}


const todoApp =  (state, action) => {
  if( reducerTypes[action.type] ){
      const newState = cloneDeep(state);
      newState[action.type] = action.value;
      console.log(action,newState)
      return  newState
  } else {
      return state
  }
};

export default todoApp