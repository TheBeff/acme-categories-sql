var express = require('express');
var app = express();
var swig = require('swig');
swig.setDefaults( {cache: false} );
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./index');
var categoryRoutes = require('./routes/categories');
var methodOverride = require('method-override');

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/categories', categoryRoutes);


module.exports = app;

app.get('/', function(req, res, next){
	db.connect(function(err, conn){
		if(err) console.log(err);
		conn.query('SELECT * FROM categories', [], function(err, results){
			if(err) return res.send(err);
			var category = results.rows;
			res.render('index', {title: 'Home', categories: category});
		})
	})
});