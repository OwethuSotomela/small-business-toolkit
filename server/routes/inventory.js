const router = require('express').Router();
const Inventory = require('../models/Inventory');

// Add item
router.post('/', async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    const saved = await newItem.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
