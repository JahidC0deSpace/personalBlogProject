import express from 'express';
import { AddComment } from '../controllers/Comment.js';
import { isLoggedIn } from '../middleware/isAdmin.js';

const CommentsRoutes = express.Router();


CommentsRoutes.post('/addcomment', isLoggedIn ,AddComment);

export default CommentsRoutes;