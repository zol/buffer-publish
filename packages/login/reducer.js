import { actionTypes } from '@bufferapp/async-data-fetch';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case `login_${actionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        sessionToken: action.result.token,
      };
    case `logout_${actionTypes.FETCH_START}`: {
      const { sessionToken, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
};
