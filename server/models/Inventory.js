const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inventory', InventorySchema);
