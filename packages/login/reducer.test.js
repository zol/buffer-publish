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
});
