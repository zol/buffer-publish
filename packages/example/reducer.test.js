import deepFreeze from 'deep-freeze';
import { actionTypes as loginActionTypes } from '@bufferapp/login';
import reducer from './reducer';

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      loggedIn: false,
    };
    const action = {
      type: 'INIT',
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle LOGIN_SUCCESS action type', () => {
    const stateAfter = {
      loggedIn: true,
    };
    const action = {
      type: loginActionTypes.LOGIN_SUCCESS,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle LOGOUT actionType', () => {
    const stateBefore = {
      loggedIn: true,
    };
    const stateAfter = {
      loggedIn: false,
    };
    const action = {
      type: loginActionTypes.LOGOUT,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(reducer(stateBefore, action))
      .toEqual(stateAfter);
  });

  it('should handle LOGIN_FAIL actionType', () => {
    const stateBefore = {
      loggedIn: true,
    };
    const stateAfter = {
      loggedIn: false,
    };
    const action = {
      type: loginActionTypes.LOGIN_FAIL,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(reducer(stateBefore, action))
      .toEqual(stateAfter);
  });
});
