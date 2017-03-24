import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import PendingUpdatesContainer, {
  reducer,
  actions,
  actionTypes,
  selectors,
} from './index';
import PendingUpdates from './components';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('pending-updates', () => {
  it('should export reducer, actions and actionTypes', () => {
    expect(reducer)
      .toBeDefined();
    expect(actions)
      .toBeDefined();
    expect(actionTypes)
      .toBeDefined();
    expect(selectors)
      .toBeDefined();
  });

  describe('PendingUpdatesContainer', () => {
    it('should render a container', () => {
      const store = storeFake({});
      const wrapper = mount(
        <Provider store={store}>
          <PendingUpdatesContainer />
        </Provider>,
      );
      expect(wrapper.find(PendingUpdatesContainer).length)
        .toBe(1);
      expect(wrapper.find(PendingUpdates).length)
        .toBe(1);
    });
  });
});
