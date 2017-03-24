import deepFreeze from 'deep-freeze';
import reducer, { SET_PENDING_UPDATES } from './reducer';
import pendingUpdates from './examplePendingUpdates';

describe('reducer', () => {
  it('should return initial state', () => {
    const stateBefore = undefined;
    const stateAfter = [];
    expect(reducer(stateBefore, {}))
      .toEqual(stateAfter);
  });
  it('should set updates from initial state', () => {
    const stateBefore = undefined;
    const action = {
      type: SET_PENDING_UPDATES,
      pendingUpdates,
    };
    const stateAfter = pendingUpdates;
    deepFreeze(action);
    deepFreeze(stateAfter);
    expect(reducer(stateBefore, action))
      .toEqual(stateAfter);
  });
});
