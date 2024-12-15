// backend/controllers/paymentController.js
exports.processPayment = (req, res) => {
    const { amount, clientId, influencerId } = req.body;
    if (!amount || !clientId || !influencerId) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    res.status(200).json({ message: 'Payment processed successfully' });
  };
  