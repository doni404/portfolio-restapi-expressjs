// Import middleware
// const customMiddlewares = require("./src/middlewares/custom.middleware");
// const app = require('./src/app');
import { errorChecks } from './src/middlewares/custom.js';
import app from './src/app.js';
import dotenv from 'dotenv'

dotenv.config()

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Defining and use custom middleware (404, 500, etc)
app.use(errorChecks)

const port = process.env.PORT;

app.listen(port, '0.0.0.0', () => {
	console.log(`Server listening on port ${port}`);
});