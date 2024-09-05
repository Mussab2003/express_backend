import bcrypt from 'bcrypt';
import client from '../../config/db.conf.js';

export const localRegister = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const saltRounds = 10;
    if(email && password){

        try{
            const response = await client.query("SELECT * FROM NewUser WHERE email = $1", [email]);
            if(response.rowCount >= 1){
                res.sendStatus(409);
            }
            else{
                bcrypt.hash(password, saltRounds, async (err, hash) => {
                    if(err){
                        res.sendStatus(500);
                    }
                    try{
                        await client.query('INSERT INTO NewUser(email, password) VALUES($1, $2)', [email, hash]);
                        res.sendStatus(200);
                    }
                    catch(err){
                        console.log(err);
                        res.sendStatus(500);
                    }
                });
    
            }
        }
        catch(err){
            console.log(err);
            res.sendStatus(500);
        }
    }
    else{
        res.sendStatus(400);
    }

}