
import { connect } from 'react-redux';
// load the presentational component
import TabNavigation from './components/TabNavigation';

// default export = container
export default connect(
  state => ({
    activeTabId: state.tabs.activeTabId,
  }),
)(TabNavigation);
