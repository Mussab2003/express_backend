import express from "express";
import multer from "multer";
import { addProduct } from "../controllers/product-controller/add_product.js";
import { readProduct } from "../controllers/product-controller/read_product.js";
import { formData } from "../controllers/product-controller/add_product.js";
import { editProduct } from "../controllers/product-controller/edit_product.js";
import { removeProduct } from "../controllers/product-controller/remove_product.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads/images');
    },
    filename: (req, file, cb) => {
      const productName = req.body.name || 'default'; // Default name if product name is missing
      const extension = file.mimetype.split('/')[1]; // Getting extension from mime type
      cb(null, `${productName}-${Date.now()}.${extension}`);
    },
  });
  
  const upload = multer({ storage });


const router = express.Router();

router.post("/add-product", addProduct);
router.get("/product", readProduct);

router.post('/new-product', upload.array('images') ,formData);
router.post('/edit-product', upload.array('images'), editProduct);
router.post('/delete-product', removeProduct);

export default router;
