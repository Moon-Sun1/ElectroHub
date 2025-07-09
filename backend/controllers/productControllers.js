import productModels from "../models/productModels.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    productData.category_id = productData.category_id || productData.category;
    // If an image was uploaded, set image_url to the static path
    if (req.file) {
      // Build the static URL path for the image
      const categoryMap = {
        1: "SmartPhones",
        2: "Laptops",
        3: "Gaming",
        4: "Accessories",
        5: "Cameras",
        SmartPhones: "SmartPhones",
        Laptops: "Laptops",
        Gaming: "Gaming",
        Accessories: "Accessories",
        Cameras: "Cameras",
      };
      let category =
        req.body.category || req.body.category_name || "Accessories";
      category = categoryMap[category] || "Accessories";
      productData.image_url = `/assets/products-image/${category}/${req.file.originalname}`;
    }
    // Optionally validate required fields here
    const newProduct = await productModels.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModels.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Get a product by ID
export const getProductById = async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  if (isNaN(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  try {
    const product = await productModels.getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  if (isNaN(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  try {
    const productData = req.body;
    productData.category_id = productData.category_id || productData.category;
    if (req.file) {
      const categoryMap = {
        1: "SmartPhones",
        2: "Laptops",
        3: "Gaming",
        4: "Accessories",
        5: "Cameras",
        SmartPhones: "SmartPhones",
        Laptops: "Laptops",
        Gaming: "Gaming",
        Accessories: "Accessories",
        Cameras: "Cameras",
      };
      let category =
        req.body.category || req.body.category_name || "Accessories";
      category = categoryMap[category] || "Accessories";
      productData.image_url = `/assets/products-image/${category}/${req.file.originalname}`;
    }
    const updatedProduct = await productModels.updateProduct(
      productId,
      productData
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(`Error updating product with ID ${productId}:`, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Delete a product by ID
export const deleteProduct = async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  if (isNaN(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  try {
    const deletedProduct = await productModels.deleteProduct(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
