import Cookie from 'js-cookie';
import { actionTypes as loginActionTypes } from '@bufferapp/login';

const initialState = {
  loggedIn: !!Cookie.get('session'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case loginActionTypes.LOGOUT:
    case loginActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
