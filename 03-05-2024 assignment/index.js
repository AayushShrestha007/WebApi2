//importing the package (express)

const express = require('express')
const connectDatabase = require('./database/database');
const dotenv = require('dotenv');


//creating an express application
const app = express();

//Express Json config
app.arguments(express.json());

//dotenv configuration
dotenv.config();

//Using the port to defined in env