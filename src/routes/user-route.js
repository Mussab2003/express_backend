import express from "express";
import { localRegister } from "../controllers/user-controller/user-registeration.js";
import { localLogin } from "../controllers/user-controller/user-login.js";

const router = express.Router();

router.post('/register', localRegister);

router.post('/login', localLogin);

export default router;
