import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Text,
} from '@bufferapp/components';

import {
  ScheduleTable,
} from '@bufferapp/publish-shared-components';

const headerStyle = {
  marginBottom: '1.5rem',
  width: '100%',
};

const ProfileSettings = ({
  settingsHeader,
  loading,
  days,
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
        <ScheduleTable days={days} />
      </div>
    </div>
  );
};

// TODO: finish filling out days propTypes
ProfileSettings.propTypes = {
  settingsHeader: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  days: PropTypes.arrayOf(
    PropTypes.shape({
      dayName: PropTypes.string,
      postingTimesTotal: PropTypes.number,
    }),
  ).isRequired,
};

ProfileSettings.defaultProps = {
  loading: false,
};

export default ProfileSettings;
