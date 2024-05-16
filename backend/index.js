const express= require('express');
const dotenv = require('dotenv');
const app=express();
const connectDB=require('./config/db')
const cors = require('cors');

app.use(cors());

//importing routes
const watchlist=require('./routes/watchlist')

//importing middleware
const {notFound,errorHandler}=require('./middleware/errorMiddleware')

//for loading .env file which is in backEnd directory 
dotenv.config()

//connection to database function
connectDB();



// since we are taking data from frontend it comes in the form of Json format so use express.json middleware to accept JSON data

app.use(express.json())


const PORT=process.env.PORT ;


//for register , Login and search user api
app.use('/api',watchlist
);




app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})