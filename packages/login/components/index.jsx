import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  InputEmail,
  InputPassword,
} from '@bufferapp/components';
import styles from './style.css';

const LoginForm = ({
  handleSubmit,
  pristine,
  submitting,
}) =>
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
      <Button
        onClick={handleSubmit}
        disabled={pristine || submitting}
      >
        Login
      </Button>
    </div>
  </form>;

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'login',
})(LoginForm);
