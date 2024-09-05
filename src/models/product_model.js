import client from "../config/db.conf.js";

export class Product {
  constructor(
    name,
    description,
    price,
    image_url,
    subcategory,
    size,
    color,
    material,
    is_featured,
    on_sale,
    discount
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image_url = image_url;
    this.subcategory = subcategory;
    this.size = size;
    this.color = color;
    this.material = material;
    this.is_featured = is_featured;
    this.on_sale = on_sale;
    this.discount = discount;
  }

  async add_to_db() {
    try {
      const result = await client.query(
        "SELECT id FROM subcategory where name = $1",
        [this.subcategory]
      );
      const subcategory_id = result.rows[0].id;
      try {
        await client.query(
          "INSERT INTO Product(name, description, price, image_url, subcategory_id, size, color, material, is_featured, on_sale, discount) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
          [
            this.name,
            this.description,
            this.price,
            this.image_url,
            subcategory_id,
            this.size,
            this.color,
            this.material,
            this.is_featured,
            this.on_sale,
            this.discount,
          ]
        );
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async updateProduct(id) {
    try {
      const result = await client.query(
        "SELECT id FROM subcategory where name = $1",
        [this.subcategory]
      );
      const subcategory_id = result.rows[0].id;
      try {
        await client.query(
          "UPDATE Product SET name = $1, description = $2, price = $3, image_url = $4, subcategory_id = $5, size = $6, color = $7, material = $8, is_featured = $9, on_sale = $10, discount = $11 WHERE id = $12",
          [
            this.name,
            this.description,
            this.price,
            this.image_url,
            subcategory_id,
            this.size,
            this.color,
            this.material,
            this.is_featured,
            this.on_sale,
            this.discount,
            id,
          ]
        );
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
