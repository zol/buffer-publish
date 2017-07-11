import deepFreeze from 'deep-freeze';
import { actionTypes } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('should return initial state', () => {
    const stateAfter = {};
    const action = {
      type: 'INIT',
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle `login_FETCH_SUCCESS` action', () => {
    const sessionToken = 'session token';
    const stateBefore = {};
    const stateAfter = {
      sessionToken,
    };
    const action = {
      type: `login_${actionTypes.FETCH_SUCCESS}`,
      result: {
        token: sessionToken,
      },
    };
    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    expect(reducer(stateBefore, action))
      .toEqual(stateAfter);
  });

  it('should handle `logout_.FETCH_START` action', () => {
    const sessionToken = 'session token';
    const stateBefore = {
      sessionToken,
    };
    const stateAfter = {};
    const action = {
      type: `logout_${actionTypes.FETCH_START}`,
    };
    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    expect(reducer(stateBefore, action))
      .toEqual(stateAfter);
  });
});
