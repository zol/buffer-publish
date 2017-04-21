export const actionTypes = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const actions = {
  loginStart: ({
    email,
    password,
  }) => ({
    type: actionTypes.LOGIN_START,
    email,
    password,
  }),
  loginSuccess: ({ sessionToken }) => ({
    type: actionTypes.LOGIN_SUCCESS,
    sessionToken,
  }),
  loginFail: ({ errorMessage }) => ({
    type: actionTypes.LOGIN_FAIL,
    errorMessage,
  }),
};
