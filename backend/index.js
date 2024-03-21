import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";


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
