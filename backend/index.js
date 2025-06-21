/* IMPORTING REQUIRED PACKAGES*/
import express from "express";
import cors from "cors";
import"dotenv/config"; // Automatically loads environment variables from .env file
import router from "./routes/productRoutes.js";


/* 
    1) CREATE A SERVER WITH EXPRESS.JS 
    2) USE CORS FOR : Origin Resource Sharing (useful for APIs).
*/

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

/*
    MAKE A CRUD FOR THE APP
*/

app.use("/api/products", router);


/* LISTEN TO THE SERVER*/
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
