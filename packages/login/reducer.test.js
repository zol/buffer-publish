import deepFreeze from 'deep-freeze';
import {
  actions,
  actionTypes,
} from './reducer';


describe('actions', () => {
  it('should create loginStart action', () => {
    const actionAfter = {
      type: actionTypes.LOGIN_START,
    };
    deepFreeze(actionAfter);
    expect(actions.loginStart())
      .toEqual(actionAfter);
  });

  it('should create loginFail action', () => {
    const errorMessage = 'something bad happend';
    const actionAfter = {
      type: actionTypes.LOGIN_FAIL,
      errorMessage,
    };
    deepFreeze(actionAfter);
    expect(actions.loginFail({ errorMessage }))
      .toEqual(actionAfter);
  });

  it('should create loginSuccess action', () => {
    const sessionToken = 'some session token';
    const actionAfter = {
      type: actionTypes.LOGIN_SUCCESS,
      sessionToken,
    };
    deepFreeze(actionAfter);
    expect(actions.loginSuccess({ sessionToken }))
      .toEqual(actionAfter);
  });

  it('should create a logout action', () => {
    const actionAfter = {
      type: actionTypes.LOGOUT,
    };
    deepFreeze(actionAfter);
    expect(actions.logout())
      .toEqual(actionAfter);
  });
});
