var pg = require('pg');
var _db;

module.exports = {
	connect: function(cb){
		if(_db)
			return cb(_db);
		var client = new pg.Client('postgres://localhost/acme');
		client.connect(function(err){
			if(err)
				return cb(err);
			_db = client;
			cb(_db);
		});
	}
};


// INSERT INTO categories (name) VALUES ('Shoes');
// INSERT INTO categories (name) VALUES ('Sweaters');
// INSERT INTO products (categoryID, name) VALUES ((SELECT id FROM categories WHERE name = 'Shoes'), 'Jordan XXXI');
// INSERT INTO products (categoryID, name) VALUES ((SELECT id FROM categories WHERE name = 'Shoes'), 'Yeezys');
// INSERT INTO products (categoryID, name) VALUES ((SELECT id FROM categories WHERE name = 'Sweaters'), 'Cable Knit');
// INSERT INTO products (categoryID, name) VALUES ((SELECT id FROM categories WHERE name = 'Sweaters'), 'Turtle Neck');