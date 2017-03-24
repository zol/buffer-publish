import deepFreeze from 'deep-freeze';
import reducer, { setPendingUpdates, SET_PENDING_UPDATES } from './reducer';
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
    expect(reducer(stateBefore, action))
      .toEqual(stateAfter);
  });
  it('should set updates from intermediate state', () => {
    const stateBefore = [pendingUpdates[0]];
    const action = {
      type: SET_PENDING_UPDATES,
      pendingUpdates,
    };
    const stateAfter = pendingUpdates;
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(reducer(stateBefore, action))
      .toEqual(stateAfter);
  });
});

describe('actions', () => {
  it('should create setPendingUpdates action', () => {
    const actionAfter = {
      type: SET_PENDING_UPDATES,
      pendingUpdates,
    };
    deepFreeze(actionAfter);
    deepFreeze(pendingUpdates);
    expect(setPendingUpdates({ pendingUpdates }))
      .toEqual(actionAfter);
  });
});
