import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  InputEmail,
  InputPassword,
} from '@bufferapp/components';

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
    <div>
      <Field
        name={'password'}
        component={InputPassword}
        label={'Password'}
      />
    </div>
    <div>
      <Button>Login</Button>
    </div>
  </form>;

export default reduxForm({
  form: 'login',
})(LoginForm);
