import {
  actionTypes,
} from './';

const middleware = () => next => (action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      // check token exists, otherwise prompt user for token
      break;
    case actionTypes.LOGIN_SUCCESS:
      // the the cookie with the session token
      break;
    case actionTypes.LOGIN_FAIL:
    case actionTypes.LOGOUT:
      // delete session cookie (if it exists)
      break;
    default:
      break;
  }
  return next(action);
};

export default middleware;
