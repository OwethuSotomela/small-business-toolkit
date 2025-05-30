import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.username || 'User'}!</h2>
      <p>This is your Small Business Toolkit dashboard.</p>
    </div>
  );
};

export default Dashboard;
