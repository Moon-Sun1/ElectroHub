import { dbPool } from "../config/db.js";

const productModel = {
  async getAllProducts() {
    const query = `
    SELECT
        products.*,             
        categories.name AS category_name
    FROM
        products
    JOIN
        categories ON products.category_id = categories.category_id;
`;
    try {
      const { rows } = await dbPool.query(query);
      return rows;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  },

  async getProductById(productId) {
    const query = "SELECT * FROM products WHERE id = $1";
    try {
      const { rows } = await dbPool.query(query, [productId]);
      return rows[0];
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  },

  async createProduct(productData) {
    const query = `
      INSERT INTO products (name, description, price, category_id, image_url, company, stock_quantity, is_featured, is_trending)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *`;
    const values = [
      productData.name,
      productData.description,
      productData.price,
      productData.category_id,
      productData.image_url,
      productData.company,
      productData.stock_quantity,
      productData.is_featured,
      productData.is_trending,
    ];
    try {
      const { rows } = await dbPool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  async updateProduct(productId, productData) {
    const query = `
      UPDATE products
      SET name = $1, description = $2, price = $3, category_id = $4, image_url = $5
      WHERE id = $6
      RETURNING *`;
    const values = [
      productData.name,
      productData.description,
      productData.price,
      productData.category_id,
      productData.image_url,
      productId,
    ];
    try {
      const { rows } = await dbPool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error(`Error updating product with ID ${productId}:`, error);
      throw error;
    }
  },

  async deleteProduct(productId) {
    const query = "DELETE FROM products WHERE id = $1 RETURNING *";
    try {
      const { rows } = await dbPool.query(query, [productId]);
      return rows[0];
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
      throw error;
    }
  },
};

export default productModel;
