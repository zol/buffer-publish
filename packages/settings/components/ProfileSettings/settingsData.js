
export const settingsHeader = 'Your posting schedule for @joelgascoigne';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const times = [
  {
    value: {
      hours: 9,
      minutes: 41,
    },
    onChange: console.log('on-change'),
    onRemoveTimeClick: console.log('on-remove-time-click'),
  },
  {
    value: {
      hours: 19,
      minutes: 0,
    },
    onChange: console.log('on change'),
    onRemoveTimeClick: console.log('on-remove-time-click'),
  },
];
export const days = [
  {
    dayName: 'Monday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Tuesday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Wednesday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Thursday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Friday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Saturday',
    postingTimesTotal: times.length,
    times,
  },
  {
    dayName: 'Sunday',
    postingTimesTotal: times.length,
    times,
  },
];
