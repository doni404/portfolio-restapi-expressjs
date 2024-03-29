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
import portfoliosRouter from './routes/portfolios.js';
import testimonialsRouter from './routes/testimonials.js';
import newsRouter from './routes/news.js';
import resourcesRouter from './routes/resources.js';

// Addming helmet to enhance your API's security
// app.use(helmet({
// 	crossOriginResourcePolicy: false,
// }));
// To handle resources cross origin
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

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
app.use('/v1/public/portfolios', portfoliosRouter);
app.use('/v1/public/testimonials', testimonialsRouter);
app.use('/v1/public/news', newsRouter);
app.use('/v1/public/resources', resourcesRouter);

export default app