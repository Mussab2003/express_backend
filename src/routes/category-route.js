import express from "express";
import { addCategory } from "../controllers/categories controller/add_category.js";
import { addSubCategory } from "../controllers/categories controller/add_subcategory.js";
import client from "../config/db.conf.js";
import { readCategory, readSubCategory } from "../controllers/categories controller/read_category.js";

const router = express.Router();

router.post('/add-category', addCategory);

router.post('/add-subcategory', addSubCategory);

router.get('/get-product', async (req, res) => {
    const response = await client.query("SELECT * FROM product WHERE id = 3");
    console.log(response.rows[0]);
})

router.get('/category', readCategory);

router.get('/subcategory', readSubCategory);

export default router;
