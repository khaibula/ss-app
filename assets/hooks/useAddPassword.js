import { useState } from 'react';
import { useTimerAddPassword } from './useTimerAddPassword';
import { useContentTextField } from './useContentTextField';
import { menuLoginTextFields, screensList } from '../constants';
import { api } from '../../api/api';

export const useAddPassword = (onEnd = () => {}) => {
  const [timer, setTimer] = useTimerAddPassword();
  const [isLoading, setIsLoading] = useState(false);
  const timerLength = useContentTextField(screensList.menuLogin, menuLoginTextFields.timerLength);
  const addPassword = phone => {
    setIsLoading(true)
    if (timer > 0) {
      return false;
    }
    api
      .post('auth/phone', {
        json: {
          phone,
        },
      })
      .json()
      .then(res => {
        setTimer(timerLength);
        onEnd();
      })
      .finally(() => setIsLoading(false));
  };

  return [isLoading, addPassword];
};
