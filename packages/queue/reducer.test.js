import deepFreeze from 'deep-freeze';
import reducer from './reducer';

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'INIT',
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle FETCH_POSTS_START action type', () => {
    const stateAfter = {
      loading: true,
      posts: [],
    };
    const action = {
      type: 'FETCH_POSTS_START',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle FETCH_POSTS_SUCCESS action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'FETCH_POSTS_SUCCESS',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle FETCH_POSTS_ERROR action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'FETCH_POSTS_ERROR',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_CREATED action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'POST_CREATED',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_UPDATED action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'POST_UPDATED',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_CONFIRM_DELETE action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'POST_CONFIRM_DELETE',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_DELETED action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'POST_DELETED',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_DELETE_CANCELED action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'POST_DELETE_CANCELED',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_ERROR action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'POST_ERROR',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle REQUESTING_POST_DELETE action type', () => {
    const stateAfter = {
      loading: false,
      posts: [],
    };
    const action = {
      type: 'REQUESTING_POST_DELETE',
      posts: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });
});
