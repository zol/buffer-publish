import deepFreeze from 'deep-freeze';
import reducer from './reducer';
import {
  settingsHeader,
  days,
  timezones,
} from './components/ProfileSettings/settingsData';

// TODO: revert test back to unstubbed data once async data is coming in
describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      settingsHeader,
      loading: false,
      days,
      items: timezones,
    };
    const action = {
      type: 'INIT',
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });
});
