import React from 'react';
import { NavBar } from '@bufferapp/components';
import LoggedIn from '@bufferapp/example';

const App = () =>
  <div>
    <NavBar title={'Buffer'} />
    <LoggedIn />
  </div>;

export default App;
