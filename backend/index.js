import express from "express";
import { PORT } from "./config.js";

const app = new express();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    });