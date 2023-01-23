// Import middleware
const customMiddlewares = require("./src/middlewares/custom.middleware");
const app = require('./app');

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