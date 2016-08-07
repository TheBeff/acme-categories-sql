var client = require('./index');

module.exports = {
	
	addCategory: function(name){
	  client.connect(function(err, conn){
	  	if (err) throw err;
	  	conn.query('INSERT INTO categories (name) VALUES ($1)', [name], function(err, results){
		  	if (err) throw err;
		  	console.log("Added " + name + " to categories.");
		  });	  
		});
	},

	getCategory: function(id, cb){
		client.connect(function(err, conn){
	  	if (err) throw err;
	  	conn.query('SELECT * FROM categories WHERE id = $1', [id], function(err, results){
		  	if (err) throw err;
		  	// console.log(results.rows[0].name);
		  	cb(results.rows[0].name);
		  });	  
		});
	},

	getProducts: function(categoryID, cb){
		client.connect(function(err, conn){
			if(err) throw err;
			conn.query('SELECT name FROM products WHERE categoryID = $1', [categoryID], function(err, results){
				if (err) throw err;
				cb(results.rows);
			});
		});
	},

	addProduct: function(name, categoryID, cb){
		client.connect(function(err, conn){
			if (err) throw err;
			conn.query('INSERT INTO products (name, categoryID) VALUES ($1, $2)', [name, categoryID], function(err, result){
				if (err) throw err;
				console.log(result);
				console.log("Added " + name);
				cb(result.rows);
			});
		});
	}

};