import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import { setAuth } from './../../redux/slices/authSlice';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const name = localStorage.getItem('name');

  if (name) {
    dispatch(setAuth(name));
  }

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.Login}>
      <h1 className={styles.Login__title}>Введите имя</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
