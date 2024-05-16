// Import the Watchlist model
const Watchlist = require('../models/watchlist');

// Controller function to add a stock symbol to the watchlist
const addToWatchlist = async (req, res) => {
    try {
        // Extract email and stock symbol from the request body
        const { email, symbol } = req.body;

        // Check if the email already exists in the watchlist collection
        let watchlist = await Watchlist.findOne({ email });

        // If the watchlist doesn't exist, create a new one
        if (!watchlist) {
            watchlist = new Watchlist({ email });
        }

        // Add the stock symbol to the watchlist's stocks array
        if (!watchlist.stocks.includes(symbol)) {
            watchlist.stocks.push(symbol);
        }

        // Save the updated watchlist to the database
        await watchlist.save();

        // Return success response
        res.status(200).json({ success: true, message: 'Stock added to watchlist successfully.' });
    } catch (error) {
        // Return error response
        console.error('Error adding stock to watchlist:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const removeFromWatchlist = async (req, res) => {
    try {
        // Extract email and stock symbol from the request body
        const { email, symbol } = req.body;

        // Find the watchlist corresponding to the email
        const watchlist = await Watchlist.findOne({ email });

        // If watchlist doesn't exist or the stock is not in the watchlist, return error
        if (!watchlist || !watchlist.stocks.includes(symbol)) {
            return res.status(404).json({ success: false, message: 'Stock not found in watchlist.' });
        }

        // Remove the stock symbol from the watchlist's stocks array
        watchlist.stocks = watchlist.stocks.filter(stock => stock !== symbol);

        // Save the updated watchlist to the database
        await watchlist.save();

        // Return success response
        res.status(200).json({ success: true, message: 'Stock removed from watchlist successfully.' });
    } catch (error) {
        // Return error response
        console.error('Error removing stock from watchlist:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getWatchlistByEmail = async (req, res) => {
    try {
        // Extract email from the request parameters
        const { email } = req.query;

        // Find the watchlist corresponding to the email
        const watchlist = await Watchlist.findOne({ email });

        // If watchlist doesn't exist, return a 404 error response
        if (!watchlist) {
            return res.status(404).json({ success: false, message: 'Watchlist not found for the provided email.' });
        }

        // Return the watchlist
        res.status(200).json({ success: true, watchlist });
    } catch (error) {
        // Return error response
        console.error('Error getting watchlist:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = { addToWatchlist,removeFromWatchlist,getWatchlistByEmail };
