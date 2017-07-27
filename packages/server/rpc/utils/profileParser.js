module.exports = profile => ({
  id: profile.id,
  avatarUrl: profile.avatar,
  type: profile.service,
  handle: profile.service_username,
  notifications: profile.counts.pending,
  timezone: profile.timezone,
  schedules: profile.schedules,
  serviceUsername: profile.service_username,
});
