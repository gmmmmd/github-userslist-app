import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '../Button';
import Input from '../Input';
import { setAuth, setErrors } from './../../redux/slices/authSlice';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  let value;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    value = e.target.value;
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === undefined) {
      dispatch(setErrors('Это поле не может быть пустым'));
      return null;
    }
    localStorage.setItem('name', JSON.stringify(value));
    dispatch(setAuth(value));
    dispatch(setErrors());
  };

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        className={styles.LoginForm__input}
      ></Input>
      <Button type="submit" className="primary">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
