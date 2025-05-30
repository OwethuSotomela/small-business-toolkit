const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/smallbiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/inventory', require('./routes/inventoryRoutes'));
app.use('/api/invoices', require('./routes/invoiceRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/sales', require('./routes/salesRoutes'));
app.use('/api/marketing', require('./routes/marketingRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));