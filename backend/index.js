import express from "express";
import cors from "cors";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";

import ticketrouter from "./routes/ticketRoutes.js";


const app = new express();


app.use(cors());
app.use(express.json());


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
