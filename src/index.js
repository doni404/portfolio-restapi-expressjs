// Importing the dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Defining the Express app
const app = express();

// Defining an array to work as the database (temp solution)
const ads = [
    {title: 'Hello World (again)!'}
]

// Addming helmet to enhance your API's security
app.use(helmet());

// Using bodyParser to parse JSON bodies into JS object
app.use(bodyParser.json());

// Enabling CORS for all request
app.use(cors());

// Adding morgan to log HTTP requests
app.use(morgan('combined'));

// Defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});


// Starting the Server
app.listen(3001, () => {
    console.log('Listening on port 3001')
});