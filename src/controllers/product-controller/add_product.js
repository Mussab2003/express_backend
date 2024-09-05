import { Product } from "../../models/product_model.js";

export const formData = (req, res) => {
  try {
    // Access text fields and other form data
    const {
      name,
      description,
      subcategory_value,
      price,
      discount,
      material,
      is_featured,
      on_sale,
    } = req.body;

    const all_colors = ["black", "white", "red", "blue", "orange"];
    const selected_colors = all_colors.filter((item) => {
      if (req.body[item] == "true") {
        return item;
      }
    });

    const all_sizes = ["XS", "S", "M", "L", "XL"];
    const selected_sizes = all_sizes.filter((item) => {
      if (req.body[item] == "true") {
        return item;
      }
    });
    console.log(selected_colors);
    console.log(selected_sizes);

    var newprice = price;
    if (discount > 0) {
      newprice = price - price * (discount / 100);
    }

    var filePath = [];
    //Access uploaded files
    if (req.files) {
      console.log(req.files);
      filePath = req.files.map(
        (item) => item.destination + "/" + item.filename
      );
      console.log(filePath);
    }
    const product = new Product(
      name,
      description,
      newprice,
      filePath,
      subcategory_value,
      selected_sizes,
      selected_colors,
      material,
      is_featured,
      on_sale,
      discount
    );
    product.add_to_db();
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    image_url,
    subcategory_id,
    size,
    color,
    material,
  } = req.body;
  if (
    name &&
    description &&
    price &&
    image_url &&
    subcategory_id &&
    size &&
    color &&
    material
  ) {
    const newProduct = new Product(
      name,
      description,
      price,
      image_url,
      subcategory_id,
      size,
      color,
      material
    );
    await newProduct.add_to_db();
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
};
