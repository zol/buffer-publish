import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import AppSidebar from './components/AppSidebar';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('Example', () => {
  it('should render', () => {
    const store = storeFake({
      i18n: {
        translations: { },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <AppSidebar />
      </Provider>,
    );
    expect(wrapper.find(AppSidebar).length)
      .toBe(1);
  });

  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export actions', () => {
    expect(actions)
      .toBeDefined();
  });

  it('should export actionTypes', () => {
    expect(actionTypes)
      .toBeDefined();
  });

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
