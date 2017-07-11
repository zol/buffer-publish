import { actionTypes } from '@bufferapp/async-data-fetch';
import Cookie from 'js-cookie';

const middleware = () => next => (action) => {
  switch (action.type) {
    case `login_${actionTypes.FETCH_SUCCESS}`:
      Cookie.set('session', {
        token: action.sessionToken,
      }, {
        domain: '.buffer.com',
      });
      break;
    case `login_${actionTypes.FETCH_FAIL}`:
    case `logout_${actionTypes.FETCH_START}`:
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
  return next(action);
};

export default middleware;
