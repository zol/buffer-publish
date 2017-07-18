import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import AppSidebar from '@bufferapp/app-sidebar';
import ProfilePage from '../ProfilePage';

const appStyle = {
  display: 'flex',
  height: '100%',
};

const contentStyle = {
  flexGrow: 1,
};

export default () =>
  <div style={appStyle}>
    <AppSidebar activeProduct="publish" />
    <div style={contentStyle}>
      <Switch>
        <Redirect exact from={'/'} to={'/profile/12345/tab/cheese'} />
        <Route
          path={'/profile/:profileId/tab/:tabId'}
          component={ProfilePage}
        />
      </Switch>
    </div>
  </div>;
