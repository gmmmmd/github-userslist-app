import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className={`${styles.App} container`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
