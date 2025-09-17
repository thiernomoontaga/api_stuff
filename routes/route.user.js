import  express from 'express';
import { login,signup } from '../controllers/controller.user.js';
const routerUser = express.Router();
routerUser.post('/signup',signup);
routerUser.post('/login',login);

export default routerUser;

