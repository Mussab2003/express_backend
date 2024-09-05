import { SubCategory } from "../../models/categories_model.js";

export const addSubCategory = async(req, res) => {
    const name = req.body.name;
    const category_id = req.body.category_id;
    if(name && category_id){
        const newSubCategory = new SubCategory(name, category_id);
        await newSubCategory.add_to_db();
        res.sendStatus(200);
    }
    else{
        res.sendStatus(400);
    }
}