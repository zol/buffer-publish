import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  InputEmail,
  InputPassword,
} from '@bufferapp/components';
import styles from './style.css';

const LoginForm = () =>
  <form>
    <div>
      <Field
        name={'email'}
        component={InputEmail}
        label={'Email'}
        placeholder={'hello@buffer.com'}
      />
    </div>
    <div className={styles.passwordField}>
      <Field
        name={'password'}
        component={InputPassword}
        label={'Password'}
      />
    </div>
    <div className={styles.loginButton}>
      <Button>Login</Button>
    </div>
  </form>;

export default reduxForm({
  form: 'login',
})(LoginForm);
