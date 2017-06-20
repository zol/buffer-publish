export const actionTypes = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
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
