import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './utils/db.js';
import AuthRoutes from './routes/Auth.js';
import BlogRoutes from './routes/Blog.js';
import DashboardRoutes from './routes/Dashboard.js';
import CommentsRoutes from './routes/Comments.js';
import PublicRoutes from './routes/Public.js';

dotenv.config();
const app = express();
const corsOptions = {
    origin:true,
    credentials:true,
};

const PORT = process.env.PORT || 8000;

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/auth', AuthRoutes);
app.use('/api/blog',BlogRoutes);
app.use('/api/dashboard', DashboardRoutes);
app.use('/api/comment', CommentsRoutes);
app.use('/api/public',PublicRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
