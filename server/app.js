import express from "express";
import cors from "cors";

import { config } from "dotenv";

config({
  path: "./config/config.env",
});

const app = express();

//Using middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Importing and using routes
import configuration from "./Routes/configurationRoutes.js";

app.use("/api", configuration);

export default app;
