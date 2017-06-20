import Cookie from 'js-cookie';
import {
  actions,
  actionTypes,
} from './';

const middleware = store => next => (action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START: {
      const sessionCookie = Cookie.get('session');
      if (sessionCookie) {
        store.dispatch(actions.loginSuccess({
          sessionToken: sessionCookie.token,
        }));
      } else {
        console.log('Paste JWT Token:'); // eslint-disable-line no-console
      }
      break;
    }
    case actionTypes.LOGIN_SUCCESS:
      Cookie.set('session', {
        token: action.sessionToken,
      });
      break;
    case actionTypes.LOGIN_FAIL:
    case actionTypes.LOGOUT:
      Cookie.remove('session');
      break;
    default:
      break;
  }
  return next(action);
};

export default middleware;
