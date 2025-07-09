import { dbPool } from "./db.js";

async function testConnection() {
  try {
    console.log("Attempting to connect to database...");
    // Try to connect and run a simple query
    const result = await dbPool.query('SELECT *FROM users');
    console.log("Connection successful! Current time:", result);
    await dbPool.end(); // Close the connection pool
  } catch (err) {
    console.error("Error testing connection:", err);
    console.error("Error details:", {
      message: err.message,
      code: err.code,
      detail: err.detail,
    });
  }
}

testConnection();
