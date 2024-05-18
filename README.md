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
- `REACT_APP_RENDER_SERVER`: backend server domain
- `ALPHA_VANTAGE_API_KEY`: Alpha Vantage API key
- `MONGODB_URI`: MongoDB connection URI
- `PORT`:Dsirable port to run backend

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.


# steps to deploy 
## Deploying Your Backend on Render

## Prerequisites
- **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have an account.
- **Git Repository**: Ensure your React app is in a Git repository (GitHub, GitLab, or Bitbucket).




## Steps to Deploy

### 1. Login to Render
- Go to [render.com](https://render.com).
- Click on "Sign In" and log in with your GitHub, GitLab, or Bitbucket account.

### 2. Create a New Web Service
- Once logged in, click on the "New +" button on the Render dashboard.
- Select "Web Service" from the dropdown menu.

### 3. Connect to Your Repository
- Select the Git provider where your backend repository is hosted (GitHub, GitLab, or Bitbucket).
- Render will list your repositories. Select the repository of your Node.js backend code.

### 4. Configure Your Service
- Fill in the necessary information such as:
  - **Name**: Choose a name for your service.
  - **Region**: Select the preferred region for your service.
  - **Branch**: Select the branch to deploy (e.g., `main`).
  - **Build Command**: Set the command to build your project (e.g., `npm install`).
  - **Start Command**: Set the command to start your project (e.g., `npm start`).

### 5. Environment Variables
- If your app requires environment variables, add them in the "Environment" section during the configuration process.

### 6. Deploy
- Click the "Create Web Service" button. Render will start building and deploying your Node.js backend service.
- Monitor the deployment process in the Render dashboard. Once the deployment is complete, you’ll get a live URL for your backend service.

## Additional Configuration

### Custom Domain
- To add a custom domain, go to the "Settings" tab of your service in the Render dashboard and add your domain.

### Continuous Deployment
- Render automatically deploys changes pushed to the connected branch. Ensure your repository is up-to-date for seamless deployments.

## Steps to Deploy frontend

### 1. Login to Vercel
- Go to [vercel.com](https://vercel.com).
- Click on "Log In" and sign in with your GitHub, GitLab, or Bitbucket account.

### 2. Import Project
- Click on the "New Project" button on the Vercel dashboard.
- Select the Git provider where your React app repository is hosted (GitHub, GitLab, or Bitbucket).
- Vercel will list your repositories. Select the repository of your React app.

### 3. Configure Project
- Vercel will guide you through the project configuration.
- Provide the necessary information such as the project name and root directory if your project is not in the root of the repository.

### 4. Build Settings
- Vercel will try to detect the framework automatically. For a React app, it typically sets the default build command to `npm run build` and the output directory to `build`.
- If Vercel doesn’t detect it correctly, manually set the build command to `npm run build` and the output directory to `build`.

### 5. Deploy
- Click the "Deploy" button. Vercel will start building and deploying your React app.
- Monitor the deployment process in the Vercel dashboard. Once the deployment is complete, you’ll get a live URL for your React app.

## Additional Configuration

### Custom Domain
- To add a custom domain, go to the "Domains" section in your Vercel dashboard and add your domain.

### Environment Variables
- If your app requires environment variables, you can add them in the "Settings" tab of your project in the Vercel dashboard under "Environment Variables".



Live Here:https://stock-monitoring-app-topaz.vercel.app/

## Acknowledgements

- [Alpha Vantage](https://www.alphavantage.co/) for providing stock data APIs.
- [Firebase](https://firebase.google.com/) for authentication services.
