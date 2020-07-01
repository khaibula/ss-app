import { useState } from 'react';
import { useAction } from './useAction';
import { asyncLogin } from '../../store/authSlice';
import ky from 'ky';

export const useSendPassword = ({ onError = () => {}, onEnd = () => {} }) => {
  const loginAction = useAction(asyncLogin);
  const [isLoading, setIsLoading] = useState(false);
  const sendPassword = (phone, password) => {
    setIsLoading(true);
    return ky
      .post('https://paromov.ru/auth', {
        json: {
          phone,
          password,
        },
      })
      .json()
      .then(r => r.payload.access_token)
      .then(token => {
        loginAction({ phone, password, token });
      })
      .catch(e => onError('неверный логин или пароль'))
      .finally(() => setIsLoading(false));
  };
  return [isLoading, sendPassword];
};
