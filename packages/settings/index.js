// component vs. container https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
import { connect } from 'react-redux';
// load the presentational component
import ProfileSettings from './components/ProfileSettings';
import { actions } from './reducer';

// default export = container
export default connect(
  state => ({
    loading: state.settings.loading,
    settingsHeader: state.settings.settingsHeader,
    translations: state.i18n.translations.settings, // all package translations
    days: state.settings.days,
    schedules: state.settings.schedules,
    items: state.settings.items,
    profileTimezone: state.settings.profileTimezone,
    hasTwentyFourHourTimeFormat: state.settings.hasTwentyFourHourTimeFormat,
  }),
  (dispatch, ownProps) => ({
    onUpdateTime: (hours, minutes, dayName, timeIndex) => {
      dispatch(actions.handleUpdateTime({
        hours,
        minutes,
        dayName,
        timeIndex,
        profileId: ownProps.profileId,
      }));
    },
  }),
)(ProfileSettings);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
/*
a consumer of a package should be able to use the package in the following way:
import Example, { actions, actionTypes, middleware, reducer } from '@bufferapp/publish-example';
*/
