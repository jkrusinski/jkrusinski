const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/public', express.static(path.join(__dirname, '../client/public/')));

app.use((req, res, next) => {
  var err = new Error('404 - Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  var status = err.status || 500;
  var message = process.env.NODE_ENV === 'development' ? err.stack : err.message;
  res.status(status).send(message);
});

module.exports = app;
