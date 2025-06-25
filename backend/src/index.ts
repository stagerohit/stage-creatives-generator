import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/contents', async (req, res) => {
  try {
    const response = await axios.get('https://dev-api.stage.in/nest/cms/content/all?page=1&perPage=10&dialect=har', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NTMzMzA5NTksImlhdCI6MTc1MDczODk1OSwickV4cCI6MTc1MzMzMDk1OTY3NywicklkIjoiIiwidHlwZSI6ImFjY2VzcyIsInVzZXJJZCI6IjY4MjMwNzhjMGNhMGMyZjc1OWRiMmE4YSJ9.IpthwPqPfKvgJy6Z5cOypUFzCnoYqt36nc_5OL349cw',
        'dialect': 'har',
        'lang': 'en',
        'os': 'other',
        'platform': 'web',
        'Content-Type': 'application/json',
      }
    });
    const items = response.data?.items || [];
    const result = items.map((item: any) => ({
      contentType: item.contentType,
      title: item.title,
      thumbnailURL: item.thumbnailURL
    }));
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch content' });
  }
});

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/content_assets';

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

