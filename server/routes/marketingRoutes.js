const express = require('express');
const router = express.Router();
const marketingController = require('../controllers/marketingController');

router.get('/tips', marketingController.getTips);

module.exports = router;
