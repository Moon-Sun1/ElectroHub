// Load environment variables from the .env file
import "dotenv/config";

// Import the Pool class from the pg library using import syntax
import { Pool } from "pg";

// Add debug logging
console.log("Environment variables loaded:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "********" : "Not Set");

// Access the database connection details from environment variables
// process.env values are always strings, so we need to parse the port
const dbHost = process.env.DB_HOST;
const dbPort = parseInt(process.env.DB_PORT, 10); // Convert port string to integer
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Check if essential variables are loaded (optional but good practice)
if (!dbHost || isNaN(dbPort) || !dbName || !dbUser || !dbPassword) {
  // Also check if port is a valid number
  console.error(
    "FATAL ERROR: Database connection details are not fully loaded or port is invalid from environment variables."
  );
  console.error("Missing or invalid values:");
  console.error("DB_HOST:", dbHost ? "Set" : "Missing");
  console.error("DB_PORT:", isNaN(dbPort) ? "Invalid" : "Valid");
  console.error("DB_NAME:", dbName ? "Set" : "Missing");
  console.error("DB_USER:", dbUser ? "Set" : "Missing");
  console.error("DB_PASSWORD:", dbPassword ? "Set" : "Missing");
  process.exit(1);
} else {
  console.log("Database config loaded successfully.");
  console.log(`  Host: ${dbHost}`);
  console.log(`  Port: ${dbPort}`);
  console.log(`  Database: ${dbName}`);
  console.log(`  User: ${dbUser}`);
  console.log(`  Password: ${dbPassword ? "********" : "Not Set"}`);
}

// Create a new PostgreSQL connection pool
const dbPool = new Pool({
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  port: dbPort, // Use the parsed integer port
  database: dbName,
});

//  an event listener to check if the pool connects successfully
dbPool.on("connect", () => {
  console.log("Database pool connected!");
});

// an error handler for the pool
dbPool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  // Process.exit(-1) is a common way to crash the process when unhandled errors occur
  process.exit(-1);
});

// Export the connection pool so other parts of your application can use it
export { dbPool };
