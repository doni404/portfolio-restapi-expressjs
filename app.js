// Importing the dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Defining the Express app
const app = express();

// Import other router
const contactsRouter = require('./src/routes/contacts.route');

// Addming helmet to enhance your API's security
app.use(helmet());

// Using bodyParser to parse JSON bodies into JS object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enabling CORS for all request
app.use(cors());

// Adding morgan to log HTTP requests
app.use(morgan('combined'));

// Defining default endpoint
app.get('/', (req, res) => {
	res.json({ 'message': 'ok' });
});

// Defining contacts router
app.use('/v1/contacts', contactsRouter);

module.exports = app;