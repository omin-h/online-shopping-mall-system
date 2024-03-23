import express from 'express';
import cors from 'cors';
import { PORT, connectToDatabase } from './config.js';

<<<<<<< HEAD
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
=======

const app = new express();

mongoose.connect(MONGO_URI) 
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err)
        });
>>>>>>> 27eeee937c423f3c6b64803fea2adc782d833749
