// Import Mongoose
const mongoose = require('mongoose');

// Define the watchlist schema
const WatchlistSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // Set email as unique
    },
    stocks: {
        type: [String], // Array of stock symbols
        default: [] // Default value is an empty array
    }
});

// Create and export the Watchlist model
module.exports = mongoose.model('Watchlist', WatchlistSchema);
