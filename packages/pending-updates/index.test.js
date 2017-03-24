import { reducer, actions, actionTypes } from './index';

describe('pending-updates', () => {
  it('should export reducer, actions and actionTypes', () => {
    expect(reducer)
      .toBeDefined();
    expect(actions)
      .toBeDefined();
    expect(actionTypes)
      .toBeDefined();
  });
});
