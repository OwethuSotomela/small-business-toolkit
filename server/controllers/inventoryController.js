const Inventory = require('../models/Inventory');

// Get all inventory items
exports.getInventory = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Add new inventory item
exports.addInventory = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding item', error });
  }
};
