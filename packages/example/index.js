import { connect } from 'react-redux';
import LoggedIn from './components/LoggedIn';

export default connect(
  state => ({
    loggedIn: state.example.loggedIn,
  }),
)(LoggedIn);

export reducer, { actions, actionTypes } from './reducer';
