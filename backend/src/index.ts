import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/content_assets';

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log();
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

