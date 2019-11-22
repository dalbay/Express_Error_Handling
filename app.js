// use Express
const express = require('express');
// use Morgan
const morgan = require('morgan');

// import Routes:
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// standard variable called app
const app = express();

// *** MIDDLEWARES: ***

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware to access static files
app.use(express.static(`${__dirname}/public`));

// *** ROUTES: ***

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// implement a route handler that was not catched:
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;
