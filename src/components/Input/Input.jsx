import React from 'react';

import classNames from 'classnames';
import { useSelector } from 'react-redux';

import ErrorMessage from '../ErrorMessage';
import styles from './Input.module.scss';

const Input = ({ type = 'text', onChange, className, value, ...props }) => {
  const { errors } = useSelector((state) => state.auth);

  let inputClasses = classNames(styles.Input, className);
  return (
    <>
      <input
        type={type}
        className={inputClasses}
        onChange={onChange}
        placeholder={'Петя...'}
        value={value}
        {...props}
      />
      {errors && <ErrorMessage>{errors}</ErrorMessage>}
    </>
  );
};

export default Input;
