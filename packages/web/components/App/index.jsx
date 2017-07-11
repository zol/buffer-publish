import React from 'react';
import TabNavigation from '@bufferapp/tabs';
import { Route, Switch, Redirect } from 'react-router';
import ProfilePage from '../ProfilePage';

const onClick = () => console.log('hi');
const appStyle = {
  display: 'flex',
  height: '100%',
};

const appSidebarStyle = {
  background: 'red',
  color: 'white',
  flexBasis: '4rem',
  minWidth: '4rem',
};

const contentStyle = {
  flexGrow: 1,
};

export default () =>
  <div style={appStyle}>
    <div style={appSidebarStyle}>
      App Sidebar
    </div>
    <div style={contentStyle}>
      <TabNavigation
        onTabClick={onClick}
        activeTabId={'12345'}
      />
      <Switch>
        <Redirect exact from={'/'} to={'/profile/12345/tab/cheese'} />
        <Route
          path={'/profile/:profileId/tab/:tabId'}
          component={ProfilePage}
        />
      </Switch>
    </div>
  </div>;
