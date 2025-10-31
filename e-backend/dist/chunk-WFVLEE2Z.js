import {
  connectDB
} from "./chunk-OEN2FV6I.js";
import {
  user_default
} from "./chunk-YENUKEAE.js";

// src/controllers/authController.ts
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
dotenv.config();
var JWT = process.env.JWT_SECRET;
var signup = async (req, res) => {
  await connectDB();
  try {
    const { name, email, password, status, userclass } = req.body;
    const existingUser = await user_default.findOne({ email }).select("_id");
    if (existingUser) return res.status(400).json({ message: "User Already Exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = await user_default.create({ name, email, password: hashedPassword, status, userclass });
    res.status(201).json({ message: "Signup Successful", user: newuser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
var login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user_default.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentaials" });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid password" });
    const token = Jwt.sign({ id: user._id }, JWT, { expiresIn: "7d" });
    res.json({ message: "Login Successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export {
  signup,
  login
};
