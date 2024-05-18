// SearchBar.js
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import {auth} from "../context/firebase";
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const email=auth.currentUser.email;

    let x=process.env.REACT_APP_SERVER_URL;
    let y=process.env.REACT_APP_ALPHA_API || "demo";
    const handleSearchChange = async (event) => {
        // console.log(event.target)
        const  value= event.target.value;
        setSearchTerm(value);
        console.log(searchTerm)
        if (value) {
            try {
                // Fetch stock symbols using the provided API
                const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${y}`);
                const data = await response.json();
               
                    window.alert("error:"+data.Information)
                
                console.log(data)
                setSearchResults(data.bestMatches || []);
                console.log("results",searchResults)
            } catch (error) {
                console.error('Error searching stocks:', error);
            }
        } else {
            setSearchResults([]);
        }
    };

    const addToWatchList = async (symbol) => {
        try {
            console.log("add to watchlist clicked")
            // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint for adding to watchlist
            const response = await fetch(`${x}/api/addToWatchlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email,symbol }), // Send the selected stock symbol in the request body
            });
    
            if (response.ok) {
                // Stock added to watchlist successfully
                console.log('Stock added to watchlist successfully.');
                window.alert("stock added successfully")
            } else {
                // Error adding stock to watchlist
                console.error('Error adding stock to watchlist:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding stock to watchlist:', error);
        }
    };
    
    return (
        <div>
            <TextField
                label="Search Stocks"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
            />
            <div>
            {searchResults.map((result, index) => (
    <Card key={index}>
        <CardContent>
            <div>{result['1. symbol']}</div>
            <div>{result['2. name']}</div>
            <div>{result['3. type']}</div>
            <div>{result['4. region']}</div>
            <div>{result['5. marketOpen']}</div>
            <Button onClick={() => addToWatchList(result['1. symbol'])}>Add to Watchlist</Button>
        </CardContent>
    </Card>
))}

                
            </div>
        </div>
    );
};

export default SearchBar;
