import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
      <Link to="/">🏠 Home</Link> |{' '}
      <Link to="/inventory">📦 Inventory</Link> |{' '}
      <Link to="/transactions">💳 Transactions</Link> |{' '}
      <Link to="/invoices">🧾 Invoices</Link> |{' '}
      <Link to="/sales-analytics">📈 Analytics</Link> |{' '}
      <Link to="/marketing-tips">📣 Marketing</Link>
    </nav>
  );
};

export default NavBar;