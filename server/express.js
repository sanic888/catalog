var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var methodOverride = require('method-override');

module.exports = function(app, config, routes) {
  var path = require('path');
  app.set('views', path.join(__dirname, '../client'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'ejs');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(expressValidator());
  app.use(express.static(path.join(__dirname, '../client')));
  app.use(methodOverride());

  routes(app);

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};
