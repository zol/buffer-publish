// component vs. container https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
import { connect } from 'react-redux';
// load the presentational component
import SentPosts from './components/SentPosts';

// default export = container
export default connect(
  state => ({
    header: state.sent.header,
    loading: state.sent.loading,
    postLists: state.sent.postLists,
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
