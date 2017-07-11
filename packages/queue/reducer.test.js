import deepFreeze from 'deep-freeze';
import reducer from './reducer';
import {
  imagePosts,
  listHeader,
} from './components/QueuedPosts/postData';

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
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
      listHeader,
      loading: true,
      posts: imagePosts,
    };
    const action = {
      type: 'FETCH_POSTS_START',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle FETCH_POSTS_SUCCESS action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'FETCH_POSTS_SUCCESS',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle FETCH_POSTS_ERROR action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'FETCH_POSTS_ERROR',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_CREATED action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'POST_CREATED',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_UPDATED action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'POST_UPDATED',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_CONFIRM_DELETE action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'POST_CONFIRM_DELETE',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_DELETED action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'POST_DELETED',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_DELETE_CANCELED action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'POST_DELETE_CANCELED',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_ERROR action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'POST_ERROR',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle REQUESTING_POST_DELETE action type', () => {
    const stateAfter = {
      listHeader,
      loading: false,
      posts: imagePosts,
    };
    const action = {
      type: 'REQUESTING_POST_DELETE',
      posts: imagePosts,
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });
});
