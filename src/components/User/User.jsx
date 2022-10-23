import React from 'react';

import { useDispatch } from 'react-redux';

import { setActive } from './../../redux/slices/modalSlice';
import { setLogin } from './../../redux/slices/userSlices';
import styles from './User.module.scss';

const User = ({ id, avatar_url, login }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setActive(true));
    dispatch(setLogin(login));
  };
  return (
    <li key={id} className={styles.User} onClick={handleChange}>
      <img src={avatar_url} alt="" className={styles.User__img} />
      <span>{login}</span>
    </li>
  );
};

export default User;
