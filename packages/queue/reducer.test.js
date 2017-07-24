import deepFreeze from 'deep-freeze';
import reducer from './reducer';
import {
  listHeader,
} from './components/QueuedPosts/postData';

describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      listHeader,
      loading: true,
      postLists: [],
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
      listHeader,
      loading: true,
      postLists: [],
    };
    const action = {
      type: 'queuedPosts_FETCH_START',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle FETCH_POSTS_ERROR action type', () => {
    const stateAfter = {
      listHeader,
      loading: true,
      postLists: [],
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
      listHeader,
      loading: true,
      postLists: [],
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
      listHeader,
      loading: true,
      postLists: [],
    };
    const action = {
      type: 'POST_UPDATED',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_CONFIRM_DELETE action type', () => {
    const stateAfter = {
      listHeader,
      loading: true,
      postLists: [],
    };
    const action = {
      type: 'POST_CONFIRM_DELETE',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_DELETED action type', () => {
    const stateAfter = {
      listHeader,
      loading: true,
      postLists: [],
    };
    const action = {
      type: 'POST_DELETED',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_DELETE_CANCELED action type', () => {
    const stateAfter = {
      listHeader,
      loading: true,
      postLists: [],
    };
    const action = {
      type: 'POST_DELETE_CANCELED',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle POST_ERROR action type', () => {
    const stateAfter = {
      listHeader,
      loading: true,
      postLists: [],
    };
    const action = {
      type: 'POST_ERROR',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });

  it('should handle REQUESTING_POST_DELETE action type', () => {
    const stateAfter = {
      listHeader,
      loading: true,
      postLists: [],
    };
    const action = {
      type: 'REQUESTING_POST_DELETE',
      postLists: [],
    };
    deepFreeze(action);
    expect(reducer(undefined, action))
      .toEqual(stateAfter);
  });
});
