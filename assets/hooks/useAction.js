import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export const useAction = actionCreator => {
  const dispatch = useDispatch();
  return useCallback((...args) => dispatch(actionCreator(...args)), [actionCreator]);
};
