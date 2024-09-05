CREATE TABLE Category(
	id SERIAL PRIMARY KEY,
	name VARCHAR(30)
);

CREATE TABLE SubCategory(
	id SERIAL PRIMARY KEY,
	name VARCHAR(30),
	category_id INTEGER REFERENCES Category(id)
);

CREATE TABLE Product(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	description TEXT,
	price INTEGER,
	image_url TEXT,
	subcategory_id INTEGER REFERENCES SubCategory(id),
	size TEXT [],
	color TEXT [],
	material VARCHAR(30),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	is_featured BOOLEAN,
	on_sale BOOLEAN,
	discount INTEGER
);

CREATE TABLE Inventory(
	id SERIAL PRIMARY KEY,
	product_id INTEGER REFERENCES Product(id),
	quantity INTEGER
);

CREATE TABLE NewUser(
	id SERIAL PRIMARY KEY,
	email VARCHAR(100),
	password VARCHAR(100)
);

CREATE TABLE Cart(
	id SERIAL PRIMARY KEY,
	product_id INTEGER REFERENCES Product(id),
	user_id INTEGER REFERENCES NewUser(id),
	product_quantity_selected INTEGER
);


