const express = require('express');
const connectDB = require('./config/db');
const influencerRoutes = require('./routes/influencerRoutes');

const app = express();

// Connect to database
connectDB();

// Body parser middleware
app.use(express.json({ extended: false }));

// Mount routes
app.use('/api/influencers', influencerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
