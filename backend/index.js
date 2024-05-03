import express from 'express';
import cors from 'cors';
import { PORT, connectToDatabase } from './config.js';
import shopProductRoute from './routes/shopProductRoute.js';


const app = express();

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Connect to the database
connectToDatabase();

// Routes
app.use('/shopProduct', shopProductRoute);


// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});