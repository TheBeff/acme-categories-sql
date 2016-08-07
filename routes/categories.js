var router = require('express').Router();
var client = require('../index');
var model = require('../db-model');

module.exports = router;

router.post('/', function(req, res){
		model.addCategory(req.body.name);
		res.redirect('/');
	});