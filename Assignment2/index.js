//importing the necessary packages
const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./database/database');

//creating an express application
const app = express();

//Express json config
app.use(express.json());

//dotenv configuration
dotenv.config();

//Using the port defined in env
const PORT = process.env.PORT;

//Making a test endpoint

app.get('/test', (req, res) => {
    res.send("Test api is working");
})

//configuring routes 
app.use('/api/', require('./routes/userRoutes'));
app.use('/api/', require('./routes/reservationRoutes'));
app.use('/api/', require('./routes/appointmentRoutes'));


//connecting to database
connectDatabase();

//starting the server
app.listen(PORT, () => {
    console.log(`server is now running on port ${PORT}`)
})

