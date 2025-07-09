import { dbPool } from "../config/db.js";

const userModel = {
  async createUser(userData) {
    const query = `
      INSERT INTO users (username, email, password_hash, first_name, last_name, phone_number, address, city, state, country, postal_code, role_id, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *`;
    const values = [
      userData.username,
      userData.email,
      userData.password_hash,
      userData.first_name,
      userData.last_name,
      userData.phone_number,
      userData.address,
      userData.city,
      userData.state,
      userData.country,
      userData.postal_code,
      userData.role_id,
      userData.status || 'active',
    ];
    try {
      const { rows } = await dbPool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1`;
    try {
      const { rows } = await dbPool.query(query, [email]);
      return rows[0];
    } catch (error) {
      console.error("Error finding user by email:", error);
      throw error;
    }
  },
};

export default userModel; 