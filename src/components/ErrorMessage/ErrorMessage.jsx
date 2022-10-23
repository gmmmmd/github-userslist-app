import React from 'react';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = (props) => {
  return <span className={styles.Error}>{props.children}</span>;
};

export default ErrorMessage;
