import React, { useState } from 'react';

const Transactions = () => {
  const [form, setForm] = useState({
    type: 'sale', // or 'expense'
    description: '',
    amount: ''
  });
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = () => {
    if (!form.description || !form.amount) return;

    const newTx = {
      id: Date.now(),
      ...form,
      amount: parseFloat(form.amount),
      date: new Date().toLocaleString()
    };

    setTransactions([newTx, ...transactions]);
    setForm({ type: 'sale', description: '', amount: '' });
  };

  const total = transactions.reduce((sum, tx) => {
    return tx.type === 'sale' ? sum + tx.amount : sum - tx.amount;
  }, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>💳 Transactions</h2>

      <div style={{ marginBottom: '1rem' }}>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="sale">Sale</option>
          <option value="expense">Expense</option>
        </select>
        <input
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          name="amount"
          value={form.amount}
          type="number"
          placeholder="Amount (R)"
          onChange={handleChange}
        />
        <button onClick={handleAddTransaction}>Add</button>
      </div>

      <h3>Total Balance: R{total.toFixed(2)}</h3>

      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            <strong>{tx.type.toUpperCase()}</strong>: {tx.description} — R{tx.amount.toFixed(2)} <br />
            <small>{tx.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;