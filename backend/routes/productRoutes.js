import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import upload from "../config/multerConfig.js";
import { fileURLToPath } from "url";
import path from "path";
import jwtAuthMiddleware from "../utils/jwtAuthMiddleware.js";
const __filename = fileURLToPath(import.meta.url);
console.log("Current file path:", __filename);
const __dirname = path.dirname(__filename);
console.log("Current directory path:", __dirname);

const router = express.Router();

// Get all products
router.get("/", getAllProducts);

// Create a new product
router.post("/", jwtAuthMiddleware, upload.single("image"), createProduct);

// Get a product by ID
router.get("/:id", getProductById);

// Update a product by ID
router.put("/:id", jwtAuthMiddleware, upload.single("image"), updateProduct);

// Delete a product by ID
router.delete("/:id", jwtAuthMiddleware, deleteProduct);

export default router;
