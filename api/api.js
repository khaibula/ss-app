import { store } from '../store/store';
import ky from 'ky';
import { authSlice } from '../store/authSlice';

export const api = ky.extend({
  prefixUrl: 'https://paromov.ru/',
  timeout: 60000,
  hooks: {
    beforeRequest: [
      async request => {
        const { token } = store.getState().auth;
        request.headers.set('Authorization', `Bearer ${token}`);
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          try {
            const { phone, password } = store.getState().auth;
            const token = await ky
              .post('https://paromov.ru/auth', {
                json: {
                  phone,
                  password,
                },
              })
              .json()
              .then(r => r.payload.access_token);
            store.dispatch(authSlice.actions.setToken(token));
            request.headers.set('Authorization', `Bearer ${token}`);
            return ky(request);
          } catch (e) {
            store.dispatch(authSlice.actions.logout({}));
            throw Error(e);
          }
        }
      },
    ],
  },
});
