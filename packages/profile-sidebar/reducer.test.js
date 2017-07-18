import deepFreeze from 'deep-freeze';
import reducer from './reducer';
import profiles from './mockData/profiles';
import lockedProfiles from './mockData/lockedProfiles';

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
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
});
