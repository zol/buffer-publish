import deepFreeze from 'deep-freeze';
import reducer from './reducer';
import {
  header,
} from './components/SentPosts/postData';

// TODO: revert test back to unstubbed data once async data is coming in
describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      header,
      loading: false,
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
});
