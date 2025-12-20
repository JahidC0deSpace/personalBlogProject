import express from 'express';
import { DeleteUser, getAllDashboardData, GetUser } from '../controllers/Dashboard.js';
import {isAdmin} from '../middleware/isAdmin.js';


const DashboardRoutes = express.Router();

DashboardRoutes.get('/',isAdmin,getAllDashboardData);
DashboardRoutes.get('/users',isAdmin,GetUser);
DashboardRoutes.delete('/deleteuser/:id',isAdmin,DeleteUser);

export default DashboardRoutes;