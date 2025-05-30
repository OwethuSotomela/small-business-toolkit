const Transaction = require('../models/Transaction');

// Get sales summary (basic analytics)
exports.getSalesSummary = async (req, res) => {
  try {
    const totalSales = await Transaction.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    res.status(200).json({ total: totalSales[0]?.total || 0 });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sales summary', error });
  }
};
