import React from 'react';

import { useSelector } from 'react-redux';

import User from './../User';
import styles from './UsersList.module.scss';

const UsersList = () => {
  const { users, currentPage, perPage } = useSelector((state) => state.users);

  const lastItem = currentPage * perPage;
  const firstItem = lastItem - perPage;
  const current = users.slice(firstItem, lastItem);

  const usersList = current.map((user) => {
    return <User key={user.id} {...user} />;
  });

  return <ul className={styles.UserList}>{usersList}</ul>;
};

export default UsersList;
