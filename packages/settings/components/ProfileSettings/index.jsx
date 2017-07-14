import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Text,
} from '@bufferapp/components';

const headerStyle = {
  marginBottom: '1.5rem',
  width: '100%',
};

const ProfileSettings = ({
  settingsHeader,
  loading,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
      <div style={headerStyle}>
        <Text>{settingsHeader}</Text>
        <Divider />
        <div>Test copy</div>
      </div>
    </div>
  );
};

ProfileSettings.propTypes = {
  settingsHeader: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

ProfileSettings.defaultProps = {
  loading: false,
};

export default ProfileSettings;
