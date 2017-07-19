import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  LinkifiedText,
} from '@bufferapp/components';

import {
  PostingTimeForm,
  ScheduleTable,
  TimezoneInputForm,
} from '@bufferapp/publish-shared-components';

import SettingsTooltip from '../SettingsTooltip';

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

const sortItems = (a, b, value) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
};

const ProfileSettings = ({
  days,
  items,
  loading,
  settingsHeader,
}) => {
  if (loading) {
    return (<div>Loading...</div>);
  }
  // TODO: set initial time to current time in profile timezones
  // const now = moment().tz(timezone);
  const initialValues = {
    time: {
      hours: 14, // now.hour()
      minutes: 20, // now.minute()
    },
  };

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
          color={'black'}
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
          sortItems={sortItems}
        />
      </div>
      <Divider />
      <div style={sectionStyle}>
        <PostingTimeForm
          initialValues={initialValues}
          handleSubmit={() => { console.log('posting time submit'); }}
          twentyfourHourTime
        />
      </div>
      <Divider />
      <div style={sectionStyle}>
        <SettingsTooltip />
        <ScheduleTable days={days} />
      </div>
    </div>
  );
};

// TODO: finish filling out days propTypes
ProfileSettings.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      dayName: PropTypes.string,
      postingTimesTotal: PropTypes.number,
    }),
  ).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  settingsHeader: PropTypes.string.isRequired,
};

ProfileSettings.defaultProps = {
  loading: false,
};

export default ProfileSettings;
