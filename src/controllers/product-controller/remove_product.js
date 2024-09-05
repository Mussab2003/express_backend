import client from "../../config/db.conf.js";

export const removeProduct = async (req, res) => {
    const id = req.body.id;
    console.log(id);
    try{
        await client.query("DELETE FROM product WHERE id = $1", [id]);
        res.sendStatus(200);   
    }
    catch(err){
        res.sendStatus(500);
    }
}