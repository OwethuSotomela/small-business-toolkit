// Static marketing tips for now
exports.getTips = (req, res) => {
  const tips = [
    "💬 Always ask your customers for feedback.",
    "📱 Promote your business in WhatsApp groups.",
    "🎁 Offer a discount to repeat customers.",
    "🛍️ Display your best products in a clean area.",
    "📸 Take clear photos and use them in social media ads.",
  ];
  res.status(200).json(tips);
};
