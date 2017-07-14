import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
} from '@bufferapp/components';
import ProfileListItem from '../ProfileListItem';

const ProfileList = ({
  profiles,
}) =>
  <List
    items={profiles.map(profile =>
      <ProfileListItem
        avatarUrl={profile.avatarUrl}
        type={profile.type}
        handle={profile.handle}
        notifications={profile.notifications}
        selected={profile.selected}
        locked={profile.locked}
      />,
    )}
  />;

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape(ProfileListItem.propTypes),
  ),
};

ProfileList.defaultProps = {
  profiles: [],
};

export default ProfileList;
