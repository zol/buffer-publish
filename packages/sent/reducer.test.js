import deepFreeze from 'deep-freeze';
import reducer from './reducer';
import {
  header,
  imagePosts,
  listHeader,
} from './components/SentPosts/postData';

// TODO: revert test back to unstubbed data once async data is coming in
describe('reducer', () => {
  it('should initialize default state', () => {
    const stateAfter = {
      header,
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
});
