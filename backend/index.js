const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes placeholder
app.get('/', (req, res) => {
    res.send('Dinbog backend running 🚀');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(process.env.PORT || 5000, () => {
            console.log(`🚀 Backend running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch((err) => console.error('MongoDB error →', err));
