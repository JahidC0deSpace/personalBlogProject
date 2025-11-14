import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';
import AuthRoutes from './routes/Auth.js';
import cookieParser from 'cookie-parser';
import BlogRoutes from './routes/Blog.js';



dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/auth', AuthRoutes);
app.use('/api/blog',BlogRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


