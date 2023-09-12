import React from 'react';
import SignupForm from '../../components/signup_form/signup_form';
import styles from './signup_page.module.css';

const SignUpPage = () => {
  return (
    <div className={styles.page}>
      <SignupForm/>
    </div>
  );
};

export default SignUpPage;
