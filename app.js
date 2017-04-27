var express = require('express');
var logger = require('morgan');

var albums = require('./routes/albums');

var app = express();

app.use(logger('dev'));

app.use('/api/albums', albums);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
