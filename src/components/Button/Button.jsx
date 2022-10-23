import React from 'react';

import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ type, className, children, onClick, ...attrs }) => {
  const btnClasses = classNames(styles.Button, className, {
    [styles.Button__primary]: 'primary',
  });

  return (
    <button type={type} className={btnClasses} onClick={onClick} {...attrs}>
      {children}
    </button>
  );
};

export default Button;
