import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SalesAnalytics = () => {
  const [summary, setSummary] = useState({ total: 0 });

  useEffect(() => {
    axios.get('/api/sales/summary')
      .then(res => setSummary(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>📈 Sales Analytics</h2>
      <p><strong>Total Sales:</strong> R{summary.total.toFixed(2)}</p>
      <p>More charts coming soon…</p>
    </div>
  );
};

export default SalesAnalytics;