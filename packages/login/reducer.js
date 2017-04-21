export const actionTypes = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const actions = {
  // TODO: should take email and password
  loginStart: ({
    email,
    password,
  }) => ({
    type: actionTypes.LOGIN_START,
    email,
    password,
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
