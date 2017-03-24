import { connect } from 'react-redux';
import PendingUpdates from './components';

export default connect(
  () => ({}),
)(PendingUpdates);

export { reducer, actions, actionTypes } from './reducer';
