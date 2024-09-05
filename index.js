import express from "express";
import 'dotenv/config';
import userRouter from './src/routes/user-route.js';
import productRouter from './src/routes/product-route.js';
import categoryRouter from './src/routes/category-route.js';
import bodyParser from "body-parser";
import cors from 'cors';

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


const app = express();
const port = process.env.PORT;



app.use('/public', express.static('public'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', userRouter);
app.use('/', productRouter);
app.use('/', categoryRouter);

app.listen(port, () => {
    console.log("Running at port " + port);
});