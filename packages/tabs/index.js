
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// load the presentational component
import TabNavigation from './components/TabNavigation';


// default export = container
export default withRouter(connect(
  state => ({
    profileId: state.tabs.profileId,
  }),
)(TabNavigation));

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
