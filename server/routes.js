var config = require('./config');
var fs = require('fs');
var indexHtml = fs.readFileSync(config.spaIndexHtmlPath).toString();

module.exports = function(app) {
  	app.use('/api', require('./api/router'));

	app.route('/*').get(function(req, res) {
    	res.send(indexHtml);
	});
};
