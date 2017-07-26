import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  LinkifiedText,
  Text,
} from '@bufferapp/components';

import {
  PostingTimeForm,
  ScheduleTable,
} from '@bufferapp/publish-shared-components';

import TimezoneInputForm from '../TimezoneInputForm';

const moment = require('moment-timezone');

const headerStyle = {
  marginTop: '0.5rem',
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

const ProfileSettings = ({
  days,
  items,
  loading,
  settingsHeader,
  profileTimezone,
  hasTwentyFourHourTimeFormat,
  initialValues,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }

  const now = moment().tz(profileTimezone);
  if (!initialValues) {
    initialValues = {
      time: {
        hours: now.hour(),
        minutes: now.minute(),
      },
    };
  }
  const links = [{
    rawString: '@joelgascoigne',
    displayString: '@joelgascoigne',
    url: 'http://blog.twitter.com/2011/05/twitter-for-mac-update.html',
    indices: [26, 40],
  }];

  return (
    <div>
      <div style={headerStyle}>
        <LinkifiedText
          links={links}
          color="black"
          unstyled
        >
          {`${settingsHeader}`}
        </LinkifiedText>
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
          initialValues={initialValues}
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
  initialValues: PropTypes.shape({
    time: PropTypes.shape({
      hours: PropTypes.number,
      minutes: PropTypes.number,
    }),
  }),
  loading: PropTypes.bool.isRequired,
  profileTimezone: PropTypes.string.isRequired,
  settingsHeader: PropTypes.string.isRequired,
};

ProfileSettings.defaultProps = {
  loading: false,
  initialValues: undefined,
};

export default ProfileSettings;
