import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@bufferapp/components';

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
        <Divider color={'black'}>{settingsHeader}</Divider>
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
