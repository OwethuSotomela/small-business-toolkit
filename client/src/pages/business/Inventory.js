import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('/api/inventory')
      .then(res => setInventory(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name} | 
            <strong>Stock:</strong> {item.quantity} | 
            <strong>Price:</strong> R{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPage;