import express from 'express';
import cors from 'cors';
import { PORT, connectToDatabase } from './config.js';
import shopProductRoute from './routes/shopProductRoute.js';


const app = express();

app.use(cors());
app.use(express.json());

// Connect to the database
connectToDatabase();

// Routes
app.use('/shopProduct', shopProductRoute);


// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});