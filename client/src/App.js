// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inventory from './pages/business/Inventory';
import Transactions from './pages/business/Transactions';
import Invoices from './pages/business/Invoices';
import SalesAnalytics from './pages/business/SalesAnalytics';
import MarketingTips from './pages/business/MarketingTips';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/sales-analytics" element={<SalesAnalytics />} />
        <Route path="/marketing-tips" element={<MarketingTips />} />
      </Routes>
    </Router>
  );
}

export default App;