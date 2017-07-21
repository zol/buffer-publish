import {
  actionTypes as dataFetchActionTypes,
  actions as dataFetchActions,
} from '@bufferapp/async-data-fetch';
import middleware from './middleware';

describe('middleware', () => {
  beforeEach(() => {
    global.console.group = jest.fn();
    global.console.log = jest.fn();
    global.console.groupEnd = jest.fn();
  });
  it('should fetch user after login', () => {
    const next = jest.fn();
    const dispatch = jest.fn();
    const action = {
      type: `login_${dataFetchActionTypes.FETCH_SUCCESS}`,
    };
    middleware({ dispatch })(next)(action);
    expect(next)
      .toBeCalledWith(action);
    expect(dispatch)
      .toBeCalledWith(dataFetchActions.fetch({ name: 'user' }));
  });
  afterEach(() => {
    global.console.group.mockRestore();
    global.console.log.mockRestore();
    global.console.groupEnd.mockRestore();
  });
});
