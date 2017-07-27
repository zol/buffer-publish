import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Text,
} from '@bufferapp/components';

import {
  ScheduleTable,
} from '@bufferapp/publish-shared-components';

import PostingTimeForm from '../PostingTimeForm';
import TimezoneInputForm from '../TimezoneInputForm';

const headerStyle = {
  marginBottom: '0.5rem',
  width: '100%',
};

const timezoneStyle = {
  marginTop: '1rem',
  marginBottom: '1.5rem',
  width: '100%',
};

const sectionStyle = {
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  width: '100%',
};

/* eslint no-console: 0 */
const ProfileSettings = ({
  days,
  items,
  loading,
  settingsHeader,
  hasTwentyFourHourTimeFormat,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
      <div style={headerStyle}>
        <Text color="black">{settingsHeader}</Text>
      </div>
      <Divider />
      <div style={timezoneStyle}>
        <TimezoneInputForm
          handleSubmit={() => { console.log('timezone submit'); }}
          items={items}
          onChange={() => { console.log('on change'); }}
          onSelect={() => { console.log('on select action'); }}
        />
      </div>
      <Divider />
      <div style={sectionStyle}>
        <PostingTimeForm
          handleSubmit={() => { console.log('posting time submit'); }}
          twentyfourHourTime={hasTwentyFourHourTimeFormat}
        />
      </div>
      <Divider />
      <div style={sectionStyle}>
        <Text
          color="black"
          weight="thin"
          size="small"
        >
          Posting times
        </Text>
        <Divider color="white" />
        <ScheduleTable
          days={days}
          select24Hours={hasTwentyFourHourTimeFormat}
        />
      </div>
    </div>
  );
};

// TODO: onChange and onRemoveTimeClick required when app is not read-only
ProfileSettings.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      dayName: PropTypes.string,
      postingTimesTotal: PropTypes.number,
      times: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([
            PropTypes.shape({
              hours: PropTypes.number.isRequired,
              minutes: PropTypes.number.isRequired,
            }),
            PropTypes.string,
          ]),
          onChange: PropTypes.func,
          onRemoveTimeClick: PropTypes.func,
        }).isRequired,
      ).isRequired,
    }),
  ).isRequired,
  hasTwentyFourHourTimeFormat: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  settingsHeader: PropTypes.string.isRequired,
};

ProfileSettings.defaultProps = {
  loading: false,
};

export default ProfileSettings;
