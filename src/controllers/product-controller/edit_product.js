import { Product } from "../../models/product_model.js";

export const editProduct = (req, res) => {
    try {
        // Access text fields and other form data
        const {
          id,
          name,
          description,
          subcategory_name,
          price,
          discount,
          material,
          is_featured,
          on_sale,
          previous_image_url,
          previous_discount,
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
        const previous_images = previous_image_url.split(',');
        var newprice = price;
        var imagePath = [];
        if (discount > 0 && discount != previous_discount) {
          newprice = price - price * (discount / 100);
        }
        console.log("Hello world");
        console.log(req.files);
        var filePath = [];
        //Access uploaded files
        if (req.files.length > 0) {
          console.log(req.files);
          filePath = req.files.map(
            (item) => item.destination + "/" + item.filename
          );
        }
        else{
            filePath = previous_images;
        }
        console.log("New file path", filePath);
        const product = new Product(
          name,
          description,
          newprice,
          filePath,
          subcategory_name,
          selected_sizes,
          selected_colors,
          material,
          is_featured,
          on_sale,
          discount
        );
        product.updateProduct(id);
      } catch (error) {
        console.log(error);
      }
}