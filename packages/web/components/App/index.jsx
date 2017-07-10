import React from 'react';
import { NavBar } from '@bufferapp/components';
import LoggedIn from '@bufferapp/example';
import { TabNavigation } from '@bufferapp/tabs';

const onClick = () => console.log('hi');
const App = () =>
  <div>
    <NavBar title={'Buffer'} />
    <LoggedIn />
    <TabNavigation
      onTabClick={onClick}
      activeTabId={'12345'}
    />
    <h1>Welcome to Buffer Publishh!</h1>
  </div>;

export default App;
