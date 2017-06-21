export const actionTypes = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        sessionToken: action.sessionToken,
      };
    case actionTypes.LOGOUT: {
      const { sessionToken, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
};

export const actions = {
  loginStart: () => ({
    type: actionTypes.LOGIN_START,
  }),
  loginSuccess: ({ sessionToken }) => ({
    type: actionTypes.LOGIN_SUCCESS,
    sessionToken,
  }),
  loginFail: ({ errorMessage }) => ({
    type: actionTypes.LOGIN_FAIL,
    errorMessage,
  }),
  logout: () => ({
    type: actionTypes.LOGOUT,
  }),
};
