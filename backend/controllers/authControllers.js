import userModel from "../models/userModels.js";
import hashPassword from "../utils/passwordHashUtil.js";
import jwt from "jsonwebtoken";
import comparePassword from "../utils/passwordHashCompareUtil.js";
import dotenv from "dotenv";
dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, first_name, last_name, phone_number, address, city, state, country, postal_code, role_id } = req.body;
    const finalRoleId = role_id || 1;
    if (!email || !password || !first_name || !last_name) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const password_hash = await hashPassword(password);
    const userData = {
      username,
      email,
      password_hash,
      first_name,
      last_name,
      phone_number,
      address,
      city,
      state,
      country,
      postal_code,
      role_id: finalRoleId,
      status: 'active',
    };
    const newUser = await userModel.createUser(userData);
    // Remove password_hash before sending response
    delete newUser.password_hash;
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await userModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await comparePassword(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user.user_id, role: user.role_id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // Remove sensitive info before sending user object
    const { password_hash, ...userSafe } = user;
    res.json({ token, user: userSafe });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}; 