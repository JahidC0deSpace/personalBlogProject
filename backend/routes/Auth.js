import express from 'express';
import { upload } from '../middleware/Multer.js';
import { Login, Logout, Register } from '../controllers/Auth.js';



const AuthRoutes = express.Router();

AuthRoutes.post('/register',upload.single('profile'),Register);
AuthRoutes.post('/login',Login);
AuthRoutes.post('/logout',Logout);



export default AuthRoutes;