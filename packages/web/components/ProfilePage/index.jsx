import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';

import QueuedPosts from '@bufferapp/queue';
import SentPosts from '@bufferapp/sent';
import ProfileSettings from '@bufferapp/settings';
import TabNavigation from '@bufferapp/tabs';
import ProfileSidebar from '@bufferapp/profile-sidebar';
import { actions as dataFetchActions } from '@bufferapp/async-data-fetch';

const profilePageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const profileSideBarStyle = {
  flexBasis: '16rem',
  width: '16rem',
  minWidth: '16rem',
};

const contentStyle = {
  flexGrow: 1,
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1rem',
  marginRight: '1rem',
  height: '100vh',
};

const tabContentStyle = {
  flexGrow: 1,
  overflowY: 'auto',
  marginTop: '1rem',
};

const TabContent = ({ tabId }) => {
  switch (tabId) {
    case 'queue':
      return (
        <QueuedPosts
          onCancelConfirmClick={() => { }}
          onDeleteClick={() => { }}
          onDeleteConfirmClick={() => { }}
          onEditClick={() => { }}
          onShareNowClick={() => { }}
        />
      );
    case 'sent':
      return (
        <SentPosts />
      );
    case 'settings':
      return (
        <ProfileSettings />
      );
    default:
      return (
        <Redirect to="/" />
      );
  }
};

TabContent.propTypes = {
  tabId: PropTypes.string,
};

TabContent.defaultProps = {
  tabId: '',
};

// Taken from underscore.js
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments; // eslint-disable-line
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const onScroll = ({
  ev,
  handleScroll,
  profileId,
  page,
  tabId,
  loadingMore,
  moreToLoad,
}) => {
  const element = ev.target;
  const isBottomOfPage = element.scrollHeight - element.scrollTop === element.clientHeight;
  if (isBottomOfPage && !loadingMore && moreToLoad) {
    handleScroll({ profileId, page, tabId });
  }
};

const debouncedOnScroll = debounce(onScroll, 500);

const ProfilePage = ({
  match: {
    params: {
      profileId,
      tabId,
    },
  },
  handleScroll,
  loadingMore,
  moreToLoad,
  page,
}) =>
  <div style={profilePageStyle}>
    <div style={profileSideBarStyle}>
      <ProfileSidebar
        profileId={profileId}
        tabId={tabId}
      />
    </div>
    <div style={contentStyle}>
      <TabNavigation
        profileId={profileId}
        tabId={tabId}
      />
      <div
        style={tabContentStyle}
        onScroll={(ev) => {
          ev.persist();
          debouncedOnScroll({
            ev,
            handleScroll,
            profileId,
            page,
            tabId,
            loadingMore,
            moreToLoad,
          });
        }}
      >
        {TabContent({ tabId })}
      </div>
    </div>
  </div>;

ProfilePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
      profileId: PropTypes.string,
    }),
  }).isRequired,
  handleScroll: PropTypes.func.isRequired,
  loadingMore: PropTypes.bool.isRequired,
  moreToLoad: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
};

ProfilePage.defaultProps = {
  loading: false,
  loadingMore: false,
  moreToLoad: false,
  page: 1,
  posts: [],
  total: 0,
};

export default connect(
  (state, ownProps) => {
    const splitPath = ownProps.history.location.pathname.split('/');
    const tabId = splitPath.pop();
    return ({
      loading: state[tabId].loading,
      loadingMore: state[tabId].loadingMore,
      moreToLoad: state[tabId].moreToLoad,
      page: state[tabId].page,
      posts: state[tabId].posts,
      total: state[tabId].total,
      translations: state.i18n.translations.example, // all package translations
    });
  },
  dispatch => ({
    handleScroll: ({ profileId, page, tabId }) => {
      dispatch(
        dataFetchActions.fetch({
          name: `${tabId === 'queue' ? 'queued' : 'sent'}Posts`,
          args: {
            profileId,
            page,
            isFetchingMore: true,
          },
        }),
      );
    },
  }),
)(ProfilePage);
