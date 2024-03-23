import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export const PORT = process.env.PORT || 5555;
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/products";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.log('Error connecting to the database');
  }
};
