var express = require('express');
var http = require('http');
var mongo = require('./mongo');
var config = require('./config');

var app = express();

require('./express')(app, config, function(app){
	require('./routes')(app);
});

http.createServer(app).listen(config.port);

console.log('Server listening on port ' + config.port);
