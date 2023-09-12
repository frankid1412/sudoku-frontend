import React from 'react';
import SignInForm from '../../components/signin_form/siginin_form'
import styles from './signin_page.module.css'

const SignInPage = () => {
  return (
    <div className={styles.page}>
      <SignInForm/>
    </div>
  );
};

export default SignInPage;