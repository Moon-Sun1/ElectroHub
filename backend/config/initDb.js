/* IMPORTING REQUIRED PACKAGES*/
import express from "express";
import cors from "cors";
import { dbPool } from "./db.js";
import "dotenv/config"; // Automatically loads environment variables from .env file
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* 
    1) CREATE A SERVER WITH EXPRESS.JS 
    2) USE CORS FOR : Origin Resource Sharing (useful for APIs).
*/

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

/* INITIALIZATION ENDPOINT */
app.get("/init", async (req, res) => {
  try {
    // Initialize products from JSON
    const productsData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "products.json"), "utf8")
    );

    // Insert products
    for (const product of productsData) {
      const {
        name,
        description,
        price,
        stock_quantity,
        image_url,
        is_featured,
        is_trending,
        category_id,
      } = product;

      // Skip products with no price or stock
      if (!price || !stock_quantity) continue;

      await dbPool.query(
        `INSERT INTO products (
          name,
          description,
          price,
          stock_quantity,
          category_id,
          image_url,
          is_featured,
          is_trending,
          created_at,
          updated_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
        [
          name,
          description || "No description available",
          price,
          stock_quantity,
          category_id,
          image_url,
          is_featured || false,
          is_trending || false,
        ]
      );
    }

    res.status(200).json({
      message: "Products initialized successfully from JSON data.",
    });
  } catch (error) {
    console.error("Error initializing products:", error);
    res.status(500).json({ error: "Failed to initialize products." });
  }
});

/* LISTEN TO THE SERVER*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
