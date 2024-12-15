const connectDB = require('./config/db');

// Connect to the database
connectDB();

const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const influencerRoutes = require('./routes/influencers');
const clientRoutes = require('./routes/clients');
const paymentRoutes = require('./routes/payments');

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/influencers', influencerRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/payments', paymentRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
