import React from 'react';
import { getUser } from '../utils/auth';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const user = getUser();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Welcome to Your Dashboard</h2>
        <p>Hello, <strong>{user?.email}</strong> 👋</p>
        <p>You are now logged in. Enjoy exploring the app!</p>
      </div>
    </div>
  );
};

export default Dashboard;
