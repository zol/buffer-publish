import Cookie from 'js-cookie';
import {
  actionTypes,
} from './';

const middleware = () => next => (action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      Cookie.set('session', {
        token: action.sessionToken,
      });
      break;
    case actionTypes.LOGIN_FAIL:
    case actionTypes.LOGOUT:
      console.log('Removing Session Cookie'); // eslint-disable-line no-console
      Cookie.remove('session');
      break;
    default:
      break;
  }
  return next(action);
};

export default middleware;
