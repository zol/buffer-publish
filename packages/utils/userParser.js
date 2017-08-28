module.exports = userData => ({
  id: userData.id,
  email: userData.email,
  avatar: 'https://pbs.twimg.com/profile_images/847849987841167360/WEVTxvUA_400x400.jpg', // userData.avatar,
  /* TODO: Return the actual `avatar` once the API is doing that. */
  hasTwentyFourHourTimeFormat: userData.twentyfour_hour_time,
});
