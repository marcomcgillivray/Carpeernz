const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const carRoute = require('./routes/carRoute');


// Start express app
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend URL
  methods: 'GET,POST,PUT,DELETE, PATCH',
  optionsSuccessStatus: 204,
}));
// app.options('/api/v1/tours/:id', cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Add other necessary CORS headers
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Serving static files
app.use('/images', express.static(path.join(__dirname, 'images')));



// Set security HTTP headers

// Development logging
  app.use(morgan('dev'));


// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));


// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES
app.use('/api/v1/cars', carRoute);



module.exports = app;