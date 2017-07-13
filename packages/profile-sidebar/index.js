import { connect } from 'react-redux';
import ProfileSidebar from './components/ProfileSidebar';

export default connect(
  state => ({
    profiles: state.profileSidebar.profiles,
    lockedProfiles: state.profileSidebar.lockedProfiles,
    translations: state.i18n.translations['profile-sidebar'],
  }),
)(ProfileSidebar);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
