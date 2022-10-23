import React from 'react';

import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage } from './../../redux/slices/usersSlices';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.users);
  const { users, perPage } = useSelector((state) => state.users);

  const pagesCount = Math.ceil(users.length / perPage);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.Pagination}>
      {pages.map((page, index) => (
        <span
          key={index}
          className={classNames(
            styles.Pagination__page,
            currentPage === page && styles.Pagination__page_current
          )}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
