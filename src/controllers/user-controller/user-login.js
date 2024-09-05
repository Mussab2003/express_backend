import bcrypt from 'bcrypt';
import client from '../../config/db.conf.js';

export const localLogin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(email && password){
        try{
            const response = await client.query("SELECT * FROM NewUser WHERE email = $1", [email]);
            if(response.rowCount >= 1){
                const user = response.rows[0];
                const savedPassword = user.password;
                bcrypt.compare(password, savedPassword, (err, result) => {
                    if(err){
                        res.sendStatus(500);
                    }
                    else{
                        if(result){
                            res.sendStatus(200);
                        }
                        else{
                            res.sendStatus(401);
                        }
                    }
                });
            }
            else{
                res.send("Incorrect Email");
                res.sendStatus(401);
            }
        }
        catch(err){
            console.log(err);
            res.send(500);
        }
    }
    else{
        res.sendStatus(400);
    }
    
}