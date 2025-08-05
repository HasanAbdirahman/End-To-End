import React from 'react';
import { getUser } from '../utils/auth';

const Dashboard = () => {
  const user = getUser();

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>You are logged in as <strong>{user?.email}</strong></p>
    </div>
  );
};

export default Dashboard;
