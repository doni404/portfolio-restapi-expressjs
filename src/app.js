// Importing the dependencies 
import cors from 'cors'
import express from 'express'
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// Defining the Express app
const app = express();

// Import other router
import contactsRouter from './routes/contacts.js';

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

// Defining v1 API
app.use('/v1/public/contacts', contactsRouter);

export default app