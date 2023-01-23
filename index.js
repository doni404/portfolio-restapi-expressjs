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

// Import middleware
const customMiddlewares = require("./src/middlewares/custom.middleware");

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

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Defining and use custom middleware (404, 500, etc)
app.use(customMiddlewares.errorChecks)

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
	console.log(`Server listening on port ${port}`);
});