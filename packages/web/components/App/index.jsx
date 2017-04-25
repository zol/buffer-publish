import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { NavBar } from '@bufferapp/components';

const App = () =>
  <div>
    <NavBar title={'Buffer'} />
    <Link to={'/login'}>Login Page</Link>
  </div>;

export default App;
