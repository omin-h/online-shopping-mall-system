import express from 'express';
import cors from 'cors';
import { PORT, connectToDatabase } from './config.js';

import ticketRoutes from './routes/ticketRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Connect to the database
connectToDatabase();

// Routes
app.use('/ticket', ticketRoutes);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
