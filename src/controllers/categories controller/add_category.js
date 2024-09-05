import { Category } from "../../models/categories_model.js";

export const addCategory = async (req, res) => {
    const name = req.body.name;
    if(name){
        const newCategory = new Category(name);
        await newCategory.add_to_db();
        console.log(newCategory);
        res.sendStatus(200);
    }
    else{
        res.sendStatus(400);
    }
}