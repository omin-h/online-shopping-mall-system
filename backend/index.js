import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/brandListRoute.js';

const app = express();
const PORT = 5555;

app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://root:123@online-shopping-mall-sy.bmysewi.mongodb.net/products?retryWrites=true&w=majority&appName=online-shopping-mall-system";

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.log('Error connecting to the database');
  }
};

connect();

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('', router);
