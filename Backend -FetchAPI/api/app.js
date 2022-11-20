import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
routes(app);

mongoose.connect('mongodb://localhost:27017/todoResourcedb');

export default app;