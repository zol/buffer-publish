import React from 'react';
import { NavBar } from '@bufferapp/components';
import PendingUpdates from '@bufferapp/pending-updates';

const App = () =>
  <div>
    <NavBar title={'Buffer'} />
    <PendingUpdates />
  </div>;

export default App;
