var path = require('path');
var setty = require('setty');
setty.load({settingsDir: path.join(__dirname, '../settings')});

var rootPath = path.join(__dirname + '/../');
var spaIndex = '../client/index.html';
var spaIndexHtmlPath = path.join(__dirname, spaIndex);

module.exports = {
  root: rootPath,
  port: setty.get("port"),
  mongo: setty.get("mongo"),
  rootUrl: setty.get('rootUrl'),
  spaIndexHtmlPath: spaIndexHtmlPath
};
