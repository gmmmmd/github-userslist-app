import React from 'react';

import preloader from './../../assets/preloader.svg';
import styles from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={styles.Wrapper}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
