import React, { useEffect } from 'react';

import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import Preloader from '../Preloader';
import { setActive } from './../../redux/slices/modalSlice';
import { fetchUser } from './../../redux/slices/userSlices';
import styles from './Modal.module.scss';

const Modal = () => {
  const dispatch = useDispatch();
  const { modalActive } = useSelector((state) => state.modal);
  const { user, login, status } = useSelector((state) => state.user);
  console.log(user);

  const getUser = async () => {
    dispatch(fetchUser(login));
  };

  useEffect(() => {
    getUser();
  }, [login]);

  return (
    <div
      className={classNames(styles.Modal, modalActive && styles.Modal_active)}
      onClick={() => dispatch(setActive(false))}
    >
      <div
        className={classNames(
          styles.Modal__content,
          modalActive && styles.Modal__content_active
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'error' ? (
          <div>
            <h2>Произошла ошибка 😕</h2>
            <p>
              К сожалению, не удалось получить пользователей. Попробуйте
              повторить попытку позже.
            </p>
          </div>
        ) : (
          <>
            {status === 'loading' ? (
              <Preloader />
            ) : (
              <>
                <div className={styles.Modal__user}>
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className={styles.Modal__img}
                  />
                  <h1>{user.login}</h1>
                  <div className={styles.Modal__follow}>
                    {user.followers && <span>followers: {user.followers}</span>}
                    {user.following && <span>following: {user.following}</span>}
                  </div>
                </div>
                <div className={styles.Modal__userInfo}>
                  <div className={styles.Modal__name}>
                    {user.name && <h2>{user.name}</h2>}
                    {user.location && <span>{user.location}</span>}
                  </div>
                  <div className={styles.Modal__otherInfo}>
                    {user.email && <a href={user.email}>email: {user.email}</a>}
                    {user.bio && <span>bio: {user.bio}</span>}
                    {user.html_url && (
                      <div className={styles.Modal__github}>
                        <span>github: </span>
                        <a
                          href={user.html_url}
                          rel="noopener nofollow noreferrer"
                          target="_blank"
                          className={styles.Modal__githubLink}
                        >
                          {user.html_url}
                        </a>
                      </div>
                    )}
                    {user.blog && (
                      <div className={styles.Modal__blog}>
                        <span>blog: </span>
                        <a
                          href={user.blog}
                          rel="noopener nofollow noreferrer"
                          target="_blank"
                          className={styles.Modal__blogLink}
                        >
                          {user.blog}
                        </a>
                      </div>
                    )}
                    {user.company && <span>company: {user.company}</span>}
                  </div>
                </div>
                <Button
                  className={styles.Modal__button}
                  onClick={() => dispatch(setActive(false))}
                >
                  ][
                </Button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
