import { connect } from 'react-redux';
import LoginForm from './components';
import { actions } from './reducer';

export default connect(
  () => ({}),
  {
    onSubmit: actions.loginStart,
  },
)(LoginForm);

export { actions, actionTypes } from './reducer';
export middleware from './middleware';
