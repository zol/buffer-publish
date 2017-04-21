import React from 'react';
import { NavBar } from '@bufferapp/components';
import LoginForm from '@bufferapp/login';

const App = () =>
  <div>
    <NavBar title={'Buffer'} />
    <LoginForm />
  </div>;

export default App;
