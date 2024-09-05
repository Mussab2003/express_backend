import client from "../../config/db.conf.js";

export const readCategory = async (req, res) => {
    const response = await client.query('SELECT name FROM category');
    const category = response.rows;
    // const array = [];
    // category.forEach((item) => array.push(item.name));
    res.setHeader( "Access-Control-Allow-Origin", "http://localhost:5173" );
    res.json(category);
}

export const readSubCategory = async (req, res) => {
    const response = await client.query('SELECT subcategory.name AS subcategory_name, category.name AS category_name FROM subcategory JOIN category ON subcategory.id = category.id');
    const category = response.rows;
    res.setHeader( "Access-Control-Allow-Origin", "http://localhost:5173" );
    res.json(category);
}