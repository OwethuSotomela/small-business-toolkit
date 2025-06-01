import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('/api/invoices')
      .then(res => setInvoices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice, index) => (
          <li key={index}>
            <strong>Customer:</strong> {invoice.customerName} | 
            <strong>Amount:</strong> R{invoice.amount} | 
            <strong>Date:</strong> {new Date(invoice.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoicesPage;