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
}};