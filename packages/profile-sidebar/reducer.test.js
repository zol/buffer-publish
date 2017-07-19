import deepFreeze from 'deep-freeze';
import reducer, { actions, actionTypes } from './reducer';
import profiles from './mockData/profiles';
import lockedProfiles from './mockData/lockedProfiles';

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      selectedProfileId: null,
      profiles,
      lockedProfiles,
    };
    const action = {
      type: 'INIT',
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should generate a selectProfile action', () => {
    const id = '123';
    expect(actions.selectProfile({ id }))
      .toEqual({
        type: actionTypes.SELECT_PROFILE,
        id,
      });
  });
});
