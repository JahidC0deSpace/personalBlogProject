import express from 'express';
import { CreatePost, DeletePost, GetPosts, UpdatePost } from '../controllers/Blog.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { upload } from '../middleware/Multer.js';

const BlogRoutes = express.Router();

// Example route: Get all blog posts
BlogRoutes.post('/create',isAdmin,upload.single('postimage'),CreatePost);
BlogRoutes.delete('/delete/:id',isAdmin,DeletePost)
BlogRoutes.get('/getposts',GetPosts)
BlogRoutes.patch('/update/:id',isAdmin,upload.single('postimage'),UpdatePost)


export default BlogRoutes;