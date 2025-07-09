/* IMPORTING REQUIRED PACKAGES*/
import express from "express";
import cors from "cors";
import"dotenv/config"; // Automatically loads environment variables from .env file
import router from "./routes/productRoutes.js";
import authRoutes from './routes/authRoutes.js';
const path = await import('path');
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/* 
    1) CREATE A SERVER WITH EXPRESS.JS 
    2) USE CORS FOR : Origin Resource Sharing (useful for APIs).
*/

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

/*
    MAKE A CRUD FOR THE APP
*/

app.use("/api/products", router);
app.use("/api/auth", authRoutes);

// Serve product images statically
app.use('/assets/products-image', express.static(path.join(__dirname, '../frontend/src/assets/products image')));


/* LISTEN TO THE SERVER*/
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
