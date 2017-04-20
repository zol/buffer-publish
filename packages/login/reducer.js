export const actionTypes = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const actions = {
  loginStart: () => ({
    type: actionTypes.LOGIN_START,
  }),
  loginFail: ({ errorMessage }) => ({
    type: actionTypes.LOGIN_FAIL,
    errorMessage,
  }),
  loginSuccess: ({ sessionToken }) => ({
    type: actionTypes.LOGIN_SUCCESS,
    sessionToken,
  }),
};
