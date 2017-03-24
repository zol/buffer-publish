import deepFreeze from 'deep-freeze';
import { reducer, actions, actionTypes, selectors } from './reducer';
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
      type: actionTypes.SET_PENDING_UPDATES,
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
      type: actionTypes.SET_PENDING_UPDATES,
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
      type: actionTypes.SET_PENDING_UPDATES,
      pendingUpdates,
    };
    deepFreeze(actionAfter);
    deepFreeze(pendingUpdates);
    expect(actions.setPendingUpdates({ pendingUpdates }))
      .toEqual(actionAfter);
  });
});

describe('selectors', () => {
  it('should set a root key', () => {
    expect(selectors.key)
      .toBe('PENDING_UPDATES');
  });

  it('should getPendingUpdates from store', () => {
    const store = {
      [selectors.key]: pendingUpdates,
    };
    deepFreeze(store);
    expect(selectors.getPendingUpdates(store))
      .toEqual(pendingUpdates);
  });
});
