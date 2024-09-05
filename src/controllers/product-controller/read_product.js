import client from "../../config/db.conf.js";

export const readProduct = async (req, res) => {
    const response = await client.query('SELECT product.id, product.name, product.description, product.price, product.image_url, product.size, product.color, product.material, product.is_featured, product.on_sale, product.discount, product.created_at, category.name AS category_name, subcategory.name AS subcategory_name FROM product JOIN subcategory ON product.subcategory_id = subcategory.id JOIN category ON subcategory.category_id = category.id');
    const product = response.rows;
    res.setHeader( "Access-Control-Allow-Origin", "http://localhost:5173" );
    res.json(product);
}





