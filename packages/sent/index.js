// component vs. container https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
import { connect } from 'react-redux';
// load the presentational component
import SentPosts from './components/SentPosts';

const formatPostLists = (posts) => {
  const postLists = [];
  let day;
  let newList;

  posts.forEach((post) => {
    if (post.day !== day) {
      day = post.day;
      newList = { listHeader: day, posts: [post] };
      postLists.push(newList);
    } else { // if same day add to posts array of current list
      newList.posts.push(post);
    }
  });

  return postLists;
};

// default export = container
export default connect(
  state => ({
    header: state.sent.header,
    loading: state.sent.loading,
    loadingMore: state.sent.loadingMore,
    page: state.sent.page,
    postLists: formatPostLists(state.sent.posts),
    total: state.sent.total,
    translations: state.i18n.translations.sent, // all package translations
  }),
)(SentPosts);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
/*
a consumer of a package should be able to use the package in the following way:
import Example, { actions, actionTypes, middleware, reducer } from '@bufferapp/example';
*/
