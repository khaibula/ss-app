import { useSelector } from 'react-redux';
import { selectAddPasswordTimer, setTimer } from '../../store/addPasswordTimerSlice';
import { useAction } from './useAction';

export const useTimerAddPassword = () => {
  const timer = useSelector(selectAddPasswordTimer);
  const setTimerAction = useAction(setTimer);
  return [timer, setTimerAction];
};
