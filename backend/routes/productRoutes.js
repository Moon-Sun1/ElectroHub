import express from "express";
import { getAllProducts, createProduct } from "../controllers/productControllers.js";


const router = express.Router();

// Get all products
router.get("/", getAllProducts);

// Create a new product
router.post("/", createProduct);



export default router;
