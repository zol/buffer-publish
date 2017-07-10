
import { connect } from 'react-redux';
// load the presentational component
import TabNavigation from './components/TabNavigation';

// default export = container
export default connect(
  state => ({
    loading: state.queue.loading,
    posts: state.queue.posts,
    translations: state.i18n.translations.example, // all package translations
  }),
)(TabNavigation);
