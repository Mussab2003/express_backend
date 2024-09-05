import client from "../config/db.conf.js";

export class Category{
    constructor(name){
        this.name = name;
    }

    async add_to_db() {
        try{
            await client.query(
              "INSERT INTO category(name) VALUES($1)",
              [this.name]
            );
        }
        catch(err){
            console.log(err);
        }
      }
};

export class SubCategory{
    constructor(name, category_id){
        this.name = name;
        this.category_id = category_id;
    }

    async add_to_db() {
        try{
            await client.query(
              "INSERT INTO subcategory(name, category_id) VALUES($1, $2)",
              [this.name, this.category_id]
            );
        }
        catch(err){
            console.log(err);
        }
      }
}