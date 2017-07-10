import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Queue, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import QueuedPosts from './components/QueuedPosts';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('Queue', () => {
  it('should render', () => {
    const store = storeFake({
      queue: {
        loading: false,
        posts: [],
      },
      i18n: {
        translations: {
          example: {
            loggedIn: 'Logged In...',
            loggedOut: 'Logged Out...',
          },
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Queue />
      </Provider>,
    );
    expect(wrapper.find(QueuedPosts).length)
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
