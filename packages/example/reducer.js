import Cookie from 'js-cookie';
import { actionTypes as loginActionTypes } from '@bufferapp/login';

export const actionTypes = {};

const initialState = {
  loggedIn: !!Cookie.get('session', {
    domain: '.buffer.com',
  }),
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

export const actions = {};
