import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inventory() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', quantity: 0, price: 0 });

  useEffect(() => {
    axios.get('/api/inventory').then(res => setItems(res.data));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/inventory', form).then(res => {
      setItems(prev => [...prev, res.data]);
      setForm({ name: '', quantity: 0, price: 0 });
    });
  };

  return (
    <div>
      <h2>Inventory</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Item name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="number" placeholder="Quantity" value={form.quantity} onChange={e => setForm({ ...form, quantity: Number(e.target.value) })} />
        <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: Number(e.target.value) })} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.name} - {item.quantity} @ R{item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
