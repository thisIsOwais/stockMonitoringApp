# Stock Monitoring Dashboard

## Overview

Stock Monitoring Dashboard is a web application built to help users monitor their stock portfolios. It allows users to search for stocks, add them to their watchlist, and view detailed information about each stock.

## Features

- Search for stocks using the search bar.
- Add stocks to your watchlist.
- View latest stock prices in real-time.
- Remove stocks from your watchlist.
- View detailed information about each stock, including intraday data.

## Technologies Used

- React.js for the frontend
- Node.js and Express.js for the backend
- MongoDB as the database
- Firebase Authentication for user authentication
- Alpha Vantage API for fetching stock data

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd stock-monitoring-dashboard`
3. Install dependencies: `npm install`
4. Start the backend server: `npm start`
5. Start the frontend development server: `cd client && npm start`
6. Open your browser and go to `http://localhost:3000` to view the application.

## Configuration

Before running the application, make sure to set up the following environment variables:

- `REACT_APP_FIREBASE_API`: Firebase API key
- `MONGODB_URI`: MongoDB connection URI
- `ALPHA_VANTAGE_API_KEY`: Alpha Vantage API key

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Alpha Vantage](https://www.alphavantage.co/) for providing stock data APIs.
- [Firebase](https://firebase.google.com/) for authentication services.
