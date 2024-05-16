
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Button ,Drawer, List, ListItem, ListItemText} from '@mui/material';
import SearchBar from '../components/Search';
import { auth } from '../context/firebase';

const Dashboard = () => {
  let x=process.env.REACT_APP_SERVER_URL;
  const [watchlist, setWatchlist] = useState([]);
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    // Fetch watchlist
    console.log(`${x}/api/watchlist?email=${auth.currentUser.email}`)
    fetch(x+`api/watchlist?email=`+auth.currentUser.email, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("data ",data);
        setWatchlist(data.watchlist.stocks);
      })},[])
  

      useEffect(() => {
        // Fetch stock data for each symbol in the watchlist
        const fetchData = async () => {
          try {
            const promises = watchlist.map((symbol) => {
              if (symbol === "IBM" || symbol === "300135.SHZ") {
                return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`);
              }
              return null;
            });
  
            const responses = await Promise.all(promises);
            const newData = {};
  
            responses.forEach(response => {
              if (response !== null) {
                response.json().then(data => {
                  const symbol = data["Global Quote"]["01. symbol"];
                  const price = data["Global Quote"]["05. price"];
                  console.log(symbol, " : ", price);
                  console.log(data);
                  newData[symbol] = price;
                  console.log(newData);
                  setStockData(newData);
                  console.log(stockData);
                  console.log(watchlist)
                });
              }
            });
          } catch (error) {
            console.error('Error fetching stock data:', error);
          }
        };
  
        fetchData();
      }, [watchlist]);

  

  // Remove stock from watchlist
  const removeStockFromWatchlist = (id, symbol) => {
    fetch(`${x}/api/removeFromWatchlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: auth.currentUser.email, symbol: symbol }),
    })
      .then(() => setWatchlist(watchlist.filter(item => item._id !== id)))
      .catch(error => console.error('Error removing stock from watchlist:', error));
  };

    const [selectedStockData, setSelectedStockData] = useState(null); // State to hold selected stock data
    const [isDetailOpen, setIsDetailOpen] = useState(false); // State to manage drawer open/close
  
    // Function to handle click on "Detail" button
    const handleDetailClick = async (symbol) => {
      try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`);
        const data = await response.json();
        setSelectedStockData(data); // Set selected stock data
        setIsDetailOpen(true); // Open the drawer
      } catch (error) {
        console.error('Error fetching detailed data:', error);
      }
    };
  
    // Function to close the drawer
    const handleCloseDetail = () => {
      setIsDetailOpen(false); // Close the drawer
    };
  

  return (
 
<>
  <br></br>
  <SearchBar />
  <Container>
    <Typography variant="h4" gutterBottom>Dashboard</Typography>
    <Grid container spacing={2}>
      {/* Watchlist Section */}
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom>Watchlist</Typography>
        {watchlist.map(item => (
          <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography>{item}</Typography> {/* Display company name */}
            <div>
              <Typography>{stockData[item]}</Typography> {/* Display latest value */}
              <Button variant="outlined" onClick={() => removeStockFromWatchlist(item._id, item)}>Remove</Button> {/* Remove button */}
              <Button variant="outlined" onClick={() => handleDetailClick(item)}>Detail</Button> {/* Detail button */}
            </div>
          </div>
        ))}
      </Grid>
      {/* Stock Details Section */}
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom>Stock Details</Typography>
        {/* Add content for stock details here */}
      </Grid>
    </Grid>
  </Container>

  <Drawer anchor="right" open={isDetailOpen} onClose={handleCloseDetail}>
  <List>
    {selectedStockData && selectedStockData['Time Series (5min)'] && Object.entries(selectedStockData['Time Series (5min)']).map(([timestamp, values]) => (
      <ListItem key={timestamp}>
        <ListItemText primary={timestamp} secondary={`Open: ${values['1. open']}, High: ${values['2. high']}, Low: ${values['3. low']}, Close: ${values['4. close']}, Volume: ${values['5. volume']}`} />
      </ListItem>
    ))}
  </List>
</Drawer>
</>

  );
};

export default Dashboard;

