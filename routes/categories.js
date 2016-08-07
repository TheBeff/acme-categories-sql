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
		model.getProducts(req.params.categoryId, function(prodInfo){
		 res.render('category', {
		 	title: result,
		 	products: prodInfo,
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

router.delete('/:categoryId', function(req, res){
	model.deleteCategory(req.params.categoryId);
	res.redirect('/');
});

router.delete('/:categoryId/products/:productId', function(req, res){
	model.deleteProduct(req.params.productId);
	res.redirect('back');
});