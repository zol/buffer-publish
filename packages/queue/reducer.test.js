import deepFreeze from 'deep-freeze';
import reducer from './reducer';

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
    };
    const action = {
      type: 'INIT',
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle queuedPosts_FETCH_START action type', () => {
    const stateAfter = {
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
    };
    const action = {
      type: 'queuedPosts_FETCH_START',
      posts: [],
      args: {
        isFetchingMore: false,
      },
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle FETCH_POSTS_ERROR action type', () => {
    const stateAfter = {
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
    };
    const action = {
      type: 'FETCH_POSTS_ERROR',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_CREATED action type', () => {
    const stateAfter = {
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
    };
    const action = {
      type: 'POST_CREATED',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_UPDATED action type', () => {
    const stateAfter = {
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
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
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
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
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
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
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
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
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
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
      loading: true,
      loadingMore: false,
      moreToLoad: false,
      page: 1,
      posts: [],
      total: 0,
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
