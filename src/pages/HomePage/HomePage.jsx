import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import Preloader from '../../components/Preloader';
import UsersList from '../../components/UsersList';
import { fetchUsers } from '../../redux/slices/usersSlices';

const HomePage = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.users);

  const getUsers = async () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return isAuth ? (
    <>
      <Header />
      {status === 'error' ? (
        <div>
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить пользователей. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <>
          {status === 'loading' ? <Preloader /> : <UsersList />}
          <Pagination />
          <Modal />
        </>
      )}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
