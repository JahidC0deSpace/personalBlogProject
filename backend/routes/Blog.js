import express from 'express';
import { Create } from '../controllers/Blog.js';


const BlogRoutes = express.Router();

BlogRoutes.post("/create", Create)

export default BlogRoutes;