import express from "express";
import cors from "cors";
import { PORT, MONGO_URI, connectToDatabase } from "./config.js";
import shopProductRoute from "./routes/shopProductRoute.js";
import ticketrouter from "./routes/ticketRoutes.js";
import mongoose from "mongoose";

const app = new express();


app.use(cors());
app.use(express.json());


// Connect to the database
connectToDatabase();

// Routes
app.use('/shopProduct', shopProductRoute);
app.use("/ticket", ticketrouter);


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
