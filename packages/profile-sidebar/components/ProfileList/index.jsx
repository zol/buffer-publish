import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
} from '@bufferapp/components';
import ProfileListItem from '../ProfileListItem';

const ProfileList = ({
  profiles,
  selectedProfile,
  onProfileClick,
}) =>
  <List
    items={profiles.map(profile =>
      <ProfileListItem
        avatarUrl={profile.avatarUrl}
        type={profile.type}
        handle={profile.handle}
        notifications={profile.notifications}
        selected={profile.id === selectedProfile.id}
        locked={profile.locked}
        onClick={() => onProfileClick(profile)}
      />,
    )}
  />;

ProfileList.propTypes = {
  onProfileClick: PropTypes.func.isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape(ProfileListItem.propTypes),
  ),
  selectedProfile: PropTypes.shape(ProfileListItem.propTypes),
};

ProfileList.defaultProps = {
  profiles: [],
  selectedProfile: undefined,
};

export default ProfileList;
