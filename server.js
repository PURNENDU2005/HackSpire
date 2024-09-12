const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // Add parentheses here

const app = express;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});