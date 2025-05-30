const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customer: String,
  items: Array,
  total: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
