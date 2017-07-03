import React from 'react';
import { NavBar } from '@bufferapp/components';
import LoggedIn from '@bufferapp/example';

const App = () =>
  <div>
    <NavBar title={'Buffer'} />
    <LoggedIn />
    <h1>Welcome to Buffer Publish!</h1>
  </div>;

export default App;
