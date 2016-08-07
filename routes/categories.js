var router = require('express').Router();
var client = require('../index');
var model = require('../db-model');

module.exports = router;

router.post('/', function(req, res){
	model.addCategory(req.body.name);
	res.redirect('/');
});

router.get('/:categoryId', function(req, res){
	model.getCategory(req.params.categoryId, function(result){
		model.getProducts(req.params.categoryId, function(prodNames){
		 res.render('category', {
		 	title: result,
		 	products: prodNames,
		 	categoryId: req.params.categoryId
		 })
		})
	});
});

router.post('/:categoryId/products', function(req, res){
	model.addProduct(req.body.name, req.params.categoryId*1, function(result){
		res.redirect('back');
	});
});