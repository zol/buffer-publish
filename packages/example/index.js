// component vs. container https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
import { connect } from 'react-redux';
// load the presentational component
import LoggedIn from './components/LoggedIn';

// default export = container
export default connect(
  state => ({
    loggedIn: state.example.loggedIn,
  }),
)(LoggedIn);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';

// a consumer of a package should be able to utilize

// import Example, { reducer, actions, actionTypes, middleware } from '@bufferapp/example';
