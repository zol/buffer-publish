import {
  actionTypes as asyncActionTypes,
  actions as asyncActions,
} from '@bufferapp/async-data-fetch';

import Cookie from 'js-cookie';

import { actions } from './index';

export default ({ dispatch }) => next => (action) => {
  next(action);
  switch (action.type) {
    case 'APP_INIT': {
      const session = Cookie.get('session', {
        domain: '.buffer.com',
      });
      const parsedSession = session ? JSON.parse(session) : {};
      // simulate a succesful login with the token from the cookie
      if (parsedSession.token) {
        dispatch(asyncActions.fetchSuccess({
          name: 'login',
          args: 'simulated',
          id: 'simulated',
          result: {
            token: parsedSession.token,
          },
        }));
      }
      dispatch(actions.checkedCookie());
      // TODO: else dispatch a route change to login service
      break;
    }
    case `login_${asyncActionTypes.FETCH_SUCCESS}`:
      Cookie.set('session', {
        token: action.result.token,
      }, {
        domain: '.buffer.com',
      });
      break;
    case `login_${asyncActionTypes.FETCH_FAIL}`:
    case `logout_${asyncActionTypes.FETCH_START}`:
      if (action.error) {
        console.error(action.error.error); // eslint-disable-line no-console
      }
      console.log('Removing Session Cookie'); // eslint-disable-line no-console
      Cookie.remove('session', {
        domain: '.buffer.com',
      });
      break;
    default:
      break;
  }
};
