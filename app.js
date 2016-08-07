var express = require('express');
var app = express();
var swig = require('swig');
swig.setDefaults( {cache: false} );
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./index');

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static(path.join(__dirname, 'node_modules')));

module.exports = app;

app.get('/', function(req, res, next){
	res.send("hello world");
});