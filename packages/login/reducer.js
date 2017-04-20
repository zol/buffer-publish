export const actionTypes = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

export const actions = {
  loginStart: () => ({
    type: actionTypes.LOGIN_START,
  }),
  loginFail: ({ errorMessage }) => ({
    type: actionTypes.LOGIN_FAIL,
    errorMessage,
  }),
};
